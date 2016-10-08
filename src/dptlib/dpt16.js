/**
* knx.js - a pure Javascript library for KNX
* (C) 2016 Elias Karakoulakis
*/

//
// DPT16: ASCII string
//

// TODO: implement fromBuffer, formatAPDU

// DPT16 basetype info
exports.basetype = {
  bitlength : 14*8,
  valuetype : 'basic',
  desc : "14-character string"
}

// DPT9 subtypes
exports.subtypes = {
  // 16.000 ASCII string
  "000" : { use : "G",
    name : "DPT_String_ASCII", desc : "ASCII string",
    force_encoding : "US-ASCII"
  },

  // 16.001 ISO-8859-1 string
  "001" : { use : "G",
    name : "DPT_String_8859_1", desc : "ISO-8859-1 string",
    force_encoding : "ISO-8859-1"
  },
}