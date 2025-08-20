### Creating PDFs with PrinceXML

1. run `Zola build --drafts`
2. Copy the output `public/pdf/omsupply-pages-en/index.html` to this folder and rename "mSupply_html_files_en.txt"
   `cp ../public/pdf/omsupply-pages-en/index.html ./mSupply_html_files_en.txt`
   `cp ../public/pdf/omsupply-pages-fr/index.html ./mSupply_html_files_fr.txt`
3. Navigate to this folder, then run:

#### French

`prince --no-author-style -s msupply.css -l mSupply_html_files_fr.txt -o "Open_mSupply_mode_d'emploi.pdf"`

#### English

`prince --no-author-style -s msupply.css -l mSupply_html_files_en.txt -o Open_mSupply_user_guide.pdf`

Note the PrinceXML is commercial software- you need a license to do this.
