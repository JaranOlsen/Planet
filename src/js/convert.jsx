/*
Batch Save As WebP.jsx
https://community.adobe.com/t5/photoshop-ecosystem-discussions/export-many-files-at-once-in-webp-format-photoshop/m-p/13604411
v1.0 - 14th March 2023, Stephen Marsh
*/

#target photoshop

// Optionally run a specified action
//var actionName = "Molten Lead"; // Action to run, change as needed
//var actionSet = "Default Actions"; // Action set to run, change as needed

// Ensure that version 2022 or later is being used
var versionNumber = app.version.split(".");
var versionCheck = parseInt(versionNumber);

// Fail
if (versionCheck < 23) {
    alert("You must use Photoshop 2022 or later to save using native WebP format...");

// Pass
} else {
    // Set the input and output folders
    var inputFolder = Folder.selectDialog("Please select the input folder:");
    var outputFolder = Folder.selectDialog("Please select the output folder:");
    
    // Limit the input files, add or remove extensions as required
    var fileList = getFileList(inputFolder, /\.(tif|tiff|jpg|jpeg|psd|psb|png)$/i);
    fileList.sort();
    var savedDisplayDialogs = app.displayDialogs;
    app.displayDialogs = DialogModes.NO;
    
    // Set the file processing counter
    var fileCounter = 0;
    
    // Process the input files
    for (var i = 0; i < fileList.length; i++) {
        
        var doc = open(fileList[i]);
        // If the doc isn't in RGB mode
        if (activeDocument.mode !== DocumentMode.RGB) {
            
            // Convert to sRGB & 8 bpc
            activeDocument.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
            activeDocument.bitsPerChannel = BitsPerChannelType.EIGHT;
            
            // Run the optional action
            //app.doAction(actionName, actionSet);
            
            // Save as a copy and close
            saveWebP("compressionLossy", 75, true, true, true, true);
            activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            
            // Increment the file saving counter
            fileCounter++;

        // If the doc is in RGB mode
        } else {
            // Convert to sRGB & 8 bpc
            //activeDocument.convertProfile("sRGB IEC61966-2.1", Intent.RELATIVECOLORIMETRIC, true, false);
            activeDocument.bitsPerChannel = BitsPerChannelType.EIGHT;
            
            // Run the optional action
            //app.doAction(actionName, actionSet);
            
            // Save as a copy and close
            saveWebP("compressionLossy", 75, true, true, true, true);
            activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            
            // Increment the file saving counter
            fileCounter++;
        }
    };

    app.displayDialogs = savedDisplayDialogs;
    alert('Script completed!' + '\n' + fileCounter + ' files saved to:' + '\r' + outputFolder.fsName);


    function saveWebP(compType, compValue, xmpData, exifData, psData, asCopy) {
        var WebPDocName = activeDocument.name.replace(/\.[^\.]+$/, ''); // Remove file extension
    
        // Get the relative path of the original file to the input folder
        var relativePath = fileList[i].parent.fsName.replace(inputFolder.fsName, '');
        
        // Create the corresponding output folder if it doesn't exist yet
        var outputSubFolder = new Folder(outputFolder.fsName + relativePath);
        if (!outputSubFolder.exists) {
            outputSubFolder.create();
        }
        
        // Define the output path to be the corresponding folder in the output folder
        var WebPSavePath = outputSubFolder + "/" + WebPDocName + ".webp" 
        var WebPFile = new File(WebPSavePath);     

        /*
        // Check for existing file object
        if (WebPFile.exists) {
            // true = 'No' as default active button
            if (!confirm("File exists, overwrite: Yes or No?", true))
                // throw alert("Script cancelled!");
                throw null;
        }
        */

        function s2t(s) {
            return app.stringIDToTypeID(s);
        }
        var descriptor = new ActionDescriptor();
        var descriptor2 = new ActionDescriptor();

        // Compression parameters = "compressionLossless" | "compressionLossy"
        descriptor2.putEnumerated(s2t("compression"), s2t("WebPCompression"), s2t(compType)); // string variable
        var WebPCompIsLossless = false; // set the default flag for compression
        if (WebPCompIsLossless == false) {
            // 0 (lowest lossy quality) - 100 (highest lossy quality)
            descriptor2.putInteger(s2t("quality"), compValue); //  number variable
        }

        // Metadata options
        descriptor2.putBoolean(s2t("includeXMPData"), xmpData); // Boolean param moved to function call
        descriptor2.putBoolean(s2t("includeEXIFData"), exifData); // Boolean param moved to function call
        descriptor2.putBoolean(s2t("includePsExtras"), psData); // Boolean param moved to function call

        // WebP format and save path
        descriptor.putObject(s2t("as"), s2t("WebPFormat"), descriptor2);
        descriptor.putPath(s2t("in"), WebPFile); // Save path variable

        // Save As = false | Save As a Copy = true
        descriptor.putBoolean(s2t("copy"), asCopy); // Boolean param moved to function call

        // The extension
        descriptor.putBoolean(s2t("lowerCase"), true);

        // Execute the save
        executeAction(s2t("save"), descriptor, DialogModes.NO); // Change NO to ALL for dialog
    }
}

// Custom function to recursively fetch files from a directory and its subdirectories
function getFileList(folder, fileExtension) {
    var fileList = folder.getFiles(), allFiles = [];
    
    for(var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        
        if(file instanceof Folder) {
            allFiles = allFiles.concat(getFileList(file, fileExtension));
        }
        else if(file instanceof File && file.name.match(fileExtension)) {
            allFiles.push(file);
        }
    }
    
    return allFiles;
}