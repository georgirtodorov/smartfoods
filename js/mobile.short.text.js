function toggleFullText(producer) {

    // Get all the elements from the page
    var points =
        document.getElementById(producer + "_points");

    var showMoreText =
        document.getElementById(producer + "_moreText");

    var buttonText =
        document.getElementById(producer + "_textButton");

    // If the display property of the dots
    // to be displayed is already set to
    // 'none' (that is hidden) then this
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        buttonText.innerHTML = " прочети повече...&#8594;";
    }

        // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "&#8592;по-малко";
    }
}

function toggleFullTextTablet(producer) {

    // Get all the elements from the page
    var points =
        document.getElementById(producer + "_pointsTablet");

    var showMoreText =
        document.getElementById(producer + "_moreTextTablet");

    var buttonText =
        document.getElementById(producer + "_textButtonTablet");

    // If the display property of the dots
    // to be displayed is already set to
    // 'none' (that is hidden) then this
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        buttonText.innerHTML = " прочети повече...&#8594;";
    }

        // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "&#8592;по-малко";
    }
}

function toggleFullTextMobile(producer) {

    // Get all the elements from the page
    var points =
        document.getElementById(producer + "_pointsMobile");

    var showMoreText =
        document.getElementById(producer + "_moreTextMobile");

    var buttonText =
        document.getElementById(producer + "_textButtonMobile");

    // If the display property of the dots
    // to be displayed is already set to
    // 'none' (that is hidden) then this
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        buttonText.innerHTML = " прочети повече...&#8594;";
    }

        // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "&#8592;по-малко";
    }
}
