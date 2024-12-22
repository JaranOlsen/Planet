export function generateRandomSanskritName() {
    // Common Sanskrit syllables for first and last names
    const syllables = [
        "a", "an", "ar", "as", "ba", "bh", "ch", "da", "dh", "ga", "gha", "ha", "ja", "ka", "la", "ma", "na",
        "pa", "pra", "ra", "sa", "sha", "ta", "tha", "tra", "va", "ya", "za"
    ];

    const endings = [
        "na", "ya", "ra", "ta", "ma", "ka", "pa", "sa", "va", "sha", "ga", "la", "dha", "tha", "bha", "cha", "ja", "nya"
    ];

    // Helper function to create a single name
    function createName() {
        const syllableCount = 2; // Fixed at 2 syllables for simplicity
        let name = "";

        for (let i = 0; i < syllableCount; i++) {
            const randomSyllable = syllables[Math.floor(Math.random() * syllables.length)];
            name += randomSyllable;
        }

        const randomEnding = endings[Math.floor(Math.random() * endings.length)];
        name += randomEnding;

        // Capitalize the first letter of the name
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    // Generate a first and last name
    const firstName = createName();
    const lastName = createName();

    return `${firstName} ${lastName}`;
}