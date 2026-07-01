const specialCharacterReference = `// ā ī ū ṅ ñ ṇ ṭ ṭh ḍ ḍh ṇ ḷ ṃ ṁ ŋ 

 //azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéÉàÀèÈùÙëËüÜïÏâêîôûÂÊÎÔÛíÍáÁóÓúÚñÑłŁçÇýÝčČšŠæÆœŒāīūṅṇṭḍḷṃṁ/*-+7894561230,;:!?¡¿.%$£€={}()[]&~'\`#_°@АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯяüÜöÖäÄñÑςερτυθιοπασδφγηξκλζχψωβνμΕΡΤΥΘΙΟΠΑΣΔΦΓΗΞΚΛΖΧΨΩΒΝΜåÅæÆøØ `;

function formatNumberish(value) {
  if (value === undefined) return 'undefined';
  return String(value);
}

function formatSlides(value) {
  if (value === undefined) return 'undefined';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return JSON.stringify(value);
}

function serializeTag(tag) {
  const developerOnlySlides = tag.developerOnlySlides ? ', developerOnlySlides: true' : '';
  return `    {id: ${JSON.stringify(tag.id)}, text: ${JSON.stringify(tag.text)}, lat: ${formatNumberish(tag.lat)}, lng: ${formatNumberish(tag.lng)}, color: ${formatNumberish(tag.color)}, size: ${formatNumberish(tag.size)}, slides: ${formatSlides(tag.slides)}${developerOnlySlides}},`;
}

function serializeConnectionEntry(entry) {
  if (typeof entry === 'string') return JSON.stringify(entry);
  return JSON.stringify(entry);
}

export function serializeConnectionRows(rows) {
  if (!Array.isArray(rows)) return '';
  return rows
    .map((row) => `[${Array.isArray(row) ? row.map(serializeConnectionEntry).join(', ') : serializeConnectionEntry(row)}],`)
    .join('\n');
}

export function serializeMindmapDataFile(context) {
  const tagSource = Array.isArray(context?.tagData) ? context.tagData : [];
  const output = [
    'export const planetTagData = [',
    tagSource.map(serializeTag).join('\n'),
    '',
    ']',
    '',
    specialCharacterReference,
    '',
    'export const planetConnections = [',
    serializeConnectionRows(context?.connectionData),
    '',
    ']',
    '',
    'export const planetArrowedConnections = [',
    serializeConnectionRows(context?.arrowConnectionData),
    '',
    ']',
    '',
    'export const planetDashedConnections = [',
    serializeConnectionRows(context?.dashedConnectionData),
    '',
    ']',
    '',
    'export const planetTunnelConnections = [',
    serializeConnectionRows(context?.tunnelConnectionData),
    '',
    ']',
    '',
  ];

  return output.join('\n');
}

export async function saveMindmapDataFile(context) {
  const source = serializeMindmapDataFile(context);
  const response = await fetch('/__planet-dev/save-mindmap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dataset: context?.name,
      source,
    }),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.error || `Mindmap save failed with HTTP ${response.status}`);
  }

  return {
    ...payload,
    source,
  };
}
