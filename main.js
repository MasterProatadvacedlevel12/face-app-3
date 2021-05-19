Webcam.set({
    width:350, 
    height:300, 
    image_format: "png", 
    png_quality: 90});

    camera = document.getElementById("camera");
    Webcam.attach('#camera');

    function take_snapshot() {

        Webcam.snap(function (data_uri){
            document.getElementById("result").innerHTML = '<img id="capturedimage" src = "'+data_uri+'">';
        });
    }

    console.log(ml5.version);

    classifier = ml5.imageClassifier("", loaded);

    function loaded()
    {
        console.log("model is loaded");
    }





    function identify()
    {
        img = document.getElementById("capturedimage");
        classifier.classify(img,gotResult);
    }


    function gotResult(error, results)
    {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("image__object").innerHTML = results[0].label;
            document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
    }