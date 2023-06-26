OASIS Universal Business Language
=================================

UBL is designed to provide a universally understood and recognized commercial syntax for legally binding business documents and to operate within a standard business framework such as ISO 15000 (ebXML) to provide a complete, standards-based  infrastructure that can extend the benefits of existing EDI systems to businesses of all sizes. UBL is freely available to everyone without legal encumbrance or licensing fees.

Please refer to the official [open-oasis.org](http://oasis-open.org/) site for the full documentation for [UBL v2.0](http://docs.oasis-open.org/ubl/os-UBL-2.0/UBL-2.0.html) and [UBL v2.1](http://docs.oasis-open.org/ubl/os-UBL-2.1/UBL-2.1.html)

## UBL 2.1 JSON Alternative Representation Version 1.0
his committee note supplements the OASIS Universal Business Language version 2.1 release with an alternative expression of the UBL sample XML documents in JSON syntax, and a JSON schema expression of all 65 XSD schemas in conformance to the OASIS Business Document Naming and Design Rules Version 1.1.

## Getting started
In order to you to include this software in your own project, you must first specify the dependency on the artifact. The most current version is `2.1.0` and it is backwards compatible with `2.0.0`.

### Using the UBL JSON Schemas with Maven

```xml
  <dependency>
    <groupId>com.tradeshift</groupId>
    <artifactId>tradeshift-ubl-jsonschema</artifactId>
    <version>2.1.0-cnd02</version>
  </dependency>
```

### Using the UBL JSON Schemas with SBT
```sbt
libraryDependencies +=
  "com.tradeshift" %% "tradeshift-ubl-jsonschema" % "2.1.0-cnd02"
```

### Using the UBL JSON Schemas with Gradle
```gradle
dependencies {
  compile 'com.tradeshift:tradeshift-ubl-jsonschema:2.1.0-cnd02'
}
```

## What is included?
The artifact only contains the JSON Schema (draft 4) of the Universal Business Language standard. This repository 
contains an amount of [examples](src/test/resources/org/oasis-open/ubl/examples) that can be a starting point for your learning of UBL.



## Examples
The UBL language is a fairly big specification and it's quickly easy to get lost if you start out digging directly into the XSDs. However here is a few links to few common document types:


 * [Order](src/test/resources/org/oasis-open/ubl/examples/UBL-Order-2.1-Example.json)

 * [Minimal Invoice](src/test/resources/org/oasis-open/ubl/examples/UBL-Invoice-2.1-Example-Trivial.json)

 * [Credit Note](src/test/resources/org/oasis-open/ubl/examples/UBL-CreditNote-2.1-Example.json)

Test change (dont merge)
