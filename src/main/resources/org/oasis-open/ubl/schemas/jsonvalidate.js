var Ajv = require('ajv');

var data = require('./data');

var ajv = Ajv({
  allErrors: true,
  schemas: [
    require('./common/UBL-Invoice-2.1.json'),
    require('./common/UBL-CommonExtensionComponents-2.1.json'),
    require('./common/UBL-CommonBasicComponents-2.1.json'),
    require('./common/UBL-CommonAggregateComponents-2.1.json'),
    require('./common/UBL-UnqualifiedDataTypes-2.1.json'),
    require('./common/CCTS_CCT_SchemaModule-2.1.json'),
    require('./common/UBL-ExtensionContentDataType-2.1.json'),
    require('./common/UBL-QualifiedDataTypes-2.1.json')
  ]
});


var validate = ajv.getSchema("http://mynet.com/schemas/UBL-Invoice-2.1.json#");
var valid = validate(data);

if (!valid) console.log(validate.errors);


