From this page:
https://www.vd.ch/themes/etat-droit-finances/communes/finances-communales/
Pdf direct link https://www.vd.ch/fileadmin/user_upload/themes/territoire/communes/affaires_communales/fichiers_pdf/AI-2020_V2.pdf

Step by step to convert to data_vd_2020.json

1. convert pdf to xlsx using adobe acrobat
2. Cleanup row which are not useful
3.  mapping is the following
    yearAdopted	
    validity	
    incomeTax	
    estateTax	
    transferSalesTax	
    directAscendingTax	
    directDescendingTax
    collateralLineTax
    nonRelativeTax
    taxCompanyRealEstate
    dogTax
    entertainmentTax
4. export to csv
5. convert csv to json 