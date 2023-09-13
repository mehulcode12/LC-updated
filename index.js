//import { saveAs } from "./FileSaver";

const generatePDF = async (name, Mname, religion, 
    nationality, placeOfBirth, dobInFig, dobInWords,
    lCollege, dateOfAd, conduct, dateOfLeav, 
    yearInStud, reason, remarks) => {
    const {PDFDocument, rgb} = PDFLib;
    const existingPdfBytes = await fetch("./LC.pdf").then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    const pages =pdfDoc.getPages();
    const firstPg = pages[0];

    firstPg.drawText(name, {
        x:290,
        y:588,
        size: 12
    });

    firstPg.drawText(Mname, {
        x: 290,
        y: 558,
        size: 12,
    });

    firstPg.drawText(religion, {
        x: 290,
        y: 529,
        size: 12,
    });

    firstPg.drawText(nationality, {
        x: 290,
        y: 499,
        size: 12,
    });

    firstPg.drawText(placeOfBirth, {
        x: 290,
        y: 469,
        size: 12,
    });

    firstPg.drawText(dobInFig, {
        x: 290,
        y: 440,
        size: 12,
    });

    firstPg.drawText(dobInWords, {
        x: 290,
        y: 411,
        size: 12,
    });

    firstPg.drawText(lCollege, {
        x: 290,
        y: 381,
        size: 12,
    });

    firstPg.drawText(dateOfAd, {
        x: 290,
        y: 352,
        size: 12,
    });

    firstPg.drawText(conduct, {
        x: 290,
        y: 323,
        size: 12,
    });

    firstPg.drawText(dateOfLeav, {
        x: 290,
        y: 293,
        size: 12,
    });

    firstPg.drawText(yearInStud, {
        x: 290,
        y: 264,
        size: 12,
    });

    firstPg.drawText(reason, {
        x: 290,
        y: 235,
        size: 12,
    });

    firstPg.drawText(remarks, {
        x: 290,
        y: 205,
        size: 12,
    });

    const uri = await pdfDoc.saveAsBase64({dataUri: true});

    // Create a new HTML page with an embedded PDF
    const newWindow = window.open();
    newWindow.document.write(
        `<html><head><title>Generated PDF</title></head><body><embed src="${uri}" type="application/pdf" width="100%" height="100%" /></body></html>`
    );

    newWindow.document.close();
    //saveAs(uri, "LC.pdf", {autoBom: true})
    document.querySelector("#mypdf").src = uri;
};

const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", ()=> {
    
    const userName = document.querySelector("#name").value
    const userMname = document.querySelector("#Mname").value
    const userreligion = document.querySelector("#religion").value
    const usernationality = document.querySelector("#nationality").value
    const userplaceOfBirth = document.querySelector("#placeOfBirth").value
    const userdobInFig = document.querySelector("#dobInFig").value
    const userdobInWords = document.querySelector("#dobInWords").value
    const userlCollege = document.querySelector("#lCollege").value
    const userdateOfAd = document.querySelector("#dateOfAd").value
    const userconduct = document.querySelector("#conduct").value
    const userdateOfLeav = document.querySelector("#dateOfLeav").value
    const useryearInStud = document.querySelector("#yearInStud").value
    const userreason = document.querySelector("#reason").value
    const userremarks = document.querySelector("#remarks").value

    generatePDF(userName, userMname, userreligion, usernationality,
    userplaceOfBirth, userdobInFig, userdobInWords,
    userlCollege, userdateOfAd,userconduct, userdateOfLeav, 
    useryearInStud, userreason, userremarks)
    
})
