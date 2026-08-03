const specialCharacterReference = `// ā ī ū ṅ ñ ṇ ṭ ṭh ḍ ḍh ṇ ḷ ṃ ṁ ŋ 

 //azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéÉàÀèÈùÙëËüÜïÏâêîôûÂÊÎÔÛíÍáÁóÓúÚñÑłŁçÇýÝčČšŠæÆœŒāīūṅṇṭḍḷṃṁ/*-+7894561230,;:!?¡¿.%$£€={}()[]&~'\`#_°@АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯяüÜöÖäÄñÑςερτυθιοπασδφγηξκλζχψωβνμΕΡΤΥΘΙΟΠΑΣΔΦΓΗΞΚΛΖΧΨΩΒΝΜåÅæÆøØ `;

function formatSlides(value) {
  if (value === undefined) return 'undefined';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return JSON.stringify(value);
}

function serializeTag(tag) {
  const preferredOrder = ['id', 'text', 'lat', 'lng', 'color', 'size', 'slides'];
  const keys = [
    ...preferredOrder.filter((key) => key in tag || key === 'slides'),
    ...Object.keys(tag).filter((key) => !preferredOrder.includes(key)),
  ];
  const entries = keys.map((key) => {
    const value = tag[key];
    const serialized = key === 'slides'
      ? formatSlides(value)
      : value === undefined
        ? 'undefined'
        : JSON.stringify(value);
    return `${JSON.stringify(key)}: ${serialized}`;
  });
  return `    {${entries.join(', ')}},`;
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
  const name = String(context?.name || 'planet').toLowerCase();
  const prefix = name === 'spiral' ? 'spiral' : name === 'enneagram' ? 'enneagram' : 'planet';
  const output = [
    `export const ${prefix}TagData = [`,
    tagSource.map(serializeTag).join('\n'),
    '',
    ']',
    '',
    specialCharacterReference,
    '',
    `export const ${prefix}Connections = [`,
    serializeConnectionRows(context?.connectionData),
    '',
    ']',
    '',
    `export const ${prefix}ArrowedConnections = [`,
    serializeConnectionRows(context?.arrowConnectionData),
    '',
    ']',
    '',
    `export const ${prefix}DashedConnections = [`,
    serializeConnectionRows(context?.dashedConnectionData),
    '',
    ']',
    '',
    `export const ${prefix}TunnelConnections = [`,
    serializeConnectionRows(context?.tunnelConnectionData),
    '',
    ']',
    '',
  ];

  return output.join('\n');
}

export async function saveMindmapDataFile(context) {
  const source = serializeMindmapDataFile(context);
  const images = Array.isArray(context?.imageData)
    ? context.imageData.map(({ id, lat, lng, size, radius }) => ({ id, lat, lng, size, radius }))
    : [];
  const response = await fetch('/__planet-dev/save-mindmap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dataset: context?.name,
      source,
      images,
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
