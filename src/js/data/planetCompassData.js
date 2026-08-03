// Mindmap v2 Compass
//
// Three course paths run south-to-north through three centres of experience:
//
// - Befriending / therapy
// - Training / meditation
// - Discovering / philosophy and direct inquiry
//
// Gut, Heart, and Head are latitude bands rather than separate paths. The
// vertical routes are useful teaching journeys, not a hierarchy of centres.

const ids = Object.freeze({
  therapy: '9BFCB2C3-78B9-4982-8501-2BFF113D4207',
  meditation: '8D82CC00-C9F5-4B9E-B256-A879D4623B3C',
  inquiry: '46CBB5AE-79D5-4808-A400-4B804DA91E12',

  wholeLife: '57DD9481-6C89-46EC-9270-E50C6D7D3F11',
  gut: '122F2132-908C-4776-84B7-447BEE89648D',
  heart: '3384EDA4-D1A9-42B7-96F5-6F339ED8986E',
  head: '2BCA4D00-A9F5-4787-A967-DA3112B3C710',

  therapyGut: '603213D6-B5FA-45FA-BB59-54A856689737',
  meditationGut: '36427FBE-C564-4D65-BB73-F39A50739EC1',
  inquiryGut: '7CCDAF5B-021D-4529-B046-07A7D7D876E0',
  therapyHeart: '0333222B-4D90-49F8-8CE0-BE14C58BC80F',
  meditationHeart: '0A93D3FB-F6E7-4EA5-9F51-D93C3D89059D',
  inquiryHeart: 'F0454F70-7EEB-4751-A9B1-CF750C9A8056',
  therapyHead: '3E6051C6-FDBC-4CD0-AB74-08494B82DBBC',
  meditationHead: '3724C031-9F80-446E-9194-2FBBFD092ECE',
  inquiryHead: 'C5A190FB-A963-4697-8CC8-2B320A044633',

  horizon: '4A481D1E-5DB6-4ABB-B9D0-8164F41393F9',
});

const PATH_LONGITUDES = Object.freeze({
  therapy: 120,
  meditation: 0,
  inquiry: -120,
});

const PATH_COLORS = Object.freeze({
  therapy: 18,
  meditation: 24,
  inquiry: 36,
});

// Five evenly spaced tiers give the globe a quiet, legible rhythm:
// origin → Gut → Heart → Head → shared horizon.
const LATITUDES = Object.freeze({
  origin: -46,
  gut: -23,
  heart: 0,
  head: 23,
  horizon: 42,
});

const CENTRE_AXIS_LONGITUDE = 180;

export const planetTagData = [
  {
    id: ids.therapy,
    text: 'BEFRIENDING\ntherapy • cleaning up\nturn toward what hurts',
    lat: LATITUDES.origin,
    lng: PATH_LONGITUDES.therapy,
    color: PATH_COLORS.therapy,
    size: 88,
    slides: 211,
  },
  {
    id: ids.meditation,
    text: 'TRAINING\nmeditation • growing up\ncultivate what frees',
    lat: LATITUDES.origin,
    lng: PATH_LONGITUDES.meditation,
    color: PATH_COLORS.meditation,
    size: 88,
    slides: 212,
  },
  {
    id: ids.inquiry,
    text: 'DISCOVERING\ndirect inquiry • waking up\nsee through what binds',
    lat: LATITUDES.origin,
    lng: PATH_LONGITUDES.inquiry,
    color: PATH_COLORS.inquiry,
    size: 88,
    slides: 213,
  },

  {
    id: ids.wholeLife,
    text: 'THREE WAYS\nONE WHOLE LIFE',
    lat: LATITUDES.origin,
    lng: CENTRE_AXIS_LONGITUDE,
    color: 9,
    size: 88,
    slides: undefined,
    labelOnly: true,
  },
  {
    id: ids.gut,
    text: 'GUT\nHow do I stand?',
    lat: LATITUDES.gut,
    lng: CENTRE_AXIS_LONGITUDE,
    color: 9,
    size: 92,
    slides: undefined,
    labelOnly: true,
  },
  {
    id: ids.heart,
    text: 'HEART\nHow do I meet?',
    lat: LATITUDES.heart,
    lng: CENTRE_AXIS_LONGITUDE,
    color: 9,
    size: 92,
    slides: undefined,
    labelOnly: true,
  },
  {
    id: ids.head,
    text: 'HEAD\nHow do I see?',
    lat: LATITUDES.head,
    lng: CENTRE_AXIS_LONGITUDE,
    color: 9,
    size: 92,
    slides: undefined,
    labelOnly: true,
  },

  {
    id: ids.therapyGut,
    text: 'GUT\nFeel the need\nrecover choice',
    lat: LATITUDES.gut,
    lng: PATH_LONGITUDES.therapy,
    color: PATH_COLORS.therapy,
    size: 96,
    slides: undefined,
  },
  {
    id: ids.meditationGut,
    text: 'GUT\nReturn to the body\nsteady attention',
    lat: LATITUDES.gut,
    lng: PATH_LONGITUDES.meditation,
    color: PATH_COLORS.meditation,
    size: 84,
    slides: undefined,
  },
  {
    id: ids.inquiryGut,
    text: 'GUT\nMeet experience bare\nfind no controller',
    lat: LATITUDES.gut,
    lng: PATH_LONGITUDES.inquiry,
    color: PATH_COLORS.inquiry,
    size: 84,
    slides: undefined,
  },

  {
    id: ids.therapyHeart,
    text: 'HEART\nStay with the wound\nrestore connection',
    lat: LATITUDES.heart,
    lng: PATH_LONGITUDES.therapy,
    color: PATH_COLORS.therapy,
    size: 84,
    slides: undefined,
  },
  {
    id: ids.meditationHeart,
    text: 'HEART\nOpen into care\nhold all equally',
    lat: LATITUDES.heart,
    lng: PATH_LONGITUDES.meditation,
    color: PATH_COLORS.meditation,
    size: 84,
    slides: undefined,
  },
  {
    id: ids.inquiryHeart,
    text: 'HEART\nLet separation fall\nrest as intimacy',
    lat: LATITUDES.heart,
    lng: PATH_LONGITUDES.inquiry,
    color: PATH_COLORS.inquiry,
    size: 84,
    slides: undefined,
  },

  {
    id: ids.therapyHead,
    text: 'HEAD\nLoosen the story\nrecover meaning',
    lat: LATITUDES.head,
    lng: PATH_LONGITUDES.therapy,
    color: PATH_COLORS.therapy,
    size: 84,
    slides: undefined,
  },
  {
    id: ids.meditationHead,
    text: 'HEAD\nSee change clearly\nrelease clinging',
    lat: LATITUDES.head,
    lng: PATH_LONGITUDES.meditation,
    color: PATH_COLORS.meditation,
    size: 84,
    slides: undefined,
  },
  {
    id: ids.inquiryHead,
    text: 'HEAD\nLook for the knower\nfind no boundary',
    lat: LATITUDES.head,
    lng: PATH_LONGITUDES.inquiry,
    color: PATH_COLORS.inquiry,
    size: 84,
    slides: undefined,
  },

  {
    id: ids.horizon,
    text: 'PEACE • LOVE • TRUTH\none shared horizon',
    lat: LATITUDES.horizon,
    lng: 180,
    color: 9,
    size: 84,
    slides: undefined,
    labelOnly: true,
  },
];

for (const node of planetTagData) {
  node.compassStyle = true;
  node.castShadow = false;
}

const pathNodeIds = new Set([
  ids.therapy,
  ids.meditation,
  ids.inquiry,
  ids.therapyGut,
  ids.meditationGut,
  ids.inquiryGut,
  ids.therapyHeart,
  ids.meditationHeart,
  ids.inquiryHeart,
]);

for (const node of planetTagData) {
  if (pathNodeIds.has(node.id)) {
    node.connectionStyle = 'path';
  }
}

function emptyConnectionRows() {
  return planetTagData.map(({ id }) => [id]);
}

export const planetConnections = emptyConnectionRows();

function connect(sourceId, targetId) {
  const row = planetConnections.find(([id]) => id === sourceId);
  row.push(targetId);
}

// Three coloured threads pass through the whole person. They stop at Head:
// the shared horizon is an orientation, not a set of path-specific trophies.
connect(ids.therapy, ids.therapyGut);
connect(ids.meditation, ids.meditationGut);
connect(ids.inquiry, ids.inquiryGut);
connect(ids.therapyGut, ids.therapyHeart);
connect(ids.meditationGut, ids.meditationHeart);
connect(ids.inquiryGut, ids.inquiryHeart);
connect(ids.therapyHeart, ids.therapyHead);
connect(ids.meditationHeart, ids.meditationHead);
connect(ids.inquiryHeart, ids.inquiryHead);

export const planetArrowedConnections = emptyConnectionRows();

// Cross-path relationships remain semantic rather than becoming a permanent
// cage around the globe. The shared latitudes already communicate that the
// three paths meet the same centres.
export const planetDashedConnections = emptyConnectionRows();

export const planetTunnelConnections = emptyConnectionRows();
