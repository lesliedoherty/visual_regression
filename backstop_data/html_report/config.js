report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/tableau_test_Products_0_document_0_phone.png",
        "test": "../bitmaps_test/20200724-102423/tableau_test_Products_0_document_0_phone.png",
        "selector": "document",
        "fileName": "tableau_test_Products_0_document_0_phone.png",
        "label": "Products",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://tableauwww.test/products",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -272
          },
          "misMatchPercentage": "23.90",
          "analysisTime": 430
        },
        "diffImage": "../bitmaps_test/20200724-102423/failed_diff_tableau_test_Products_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/tableau_test_Products_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200724-102423/tableau_test_Products_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "tableau_test_Products_0_document_1_tablet.png",
        "label": "Products",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://tableauwww.test/products",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -324
          },
          "misMatchPercentage": "24.97",
          "analysisTime": 511
        },
        "diffImage": "../bitmaps_test/20200724-102423/failed_diff_tableau_test_Products_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "tableau_test "
});