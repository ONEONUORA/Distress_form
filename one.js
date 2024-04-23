


// let button = document.getElementById('submitBtn');

//         function one() {
//             let person = document.querySelector(".B").value.toUpperCase();
//             let location = document.querySelector(".C").value;

//             if (!person || !location) {
//                 alert("Please fill out both fields.");
//             } else {
//                 alert("CONGRATULATIONS " + person + ", YOU HAVE SUCCESSFULLY SUBMITTED YOUR REQUEST. ONE AI IS COMING....");
//             }
//         }

//         button.addEventListener('click', one);


let form = document.getElementById('myForm');
        let button = document.getElementById('submitBtn');

        function one(e) {
            e.preventDefault();
            let person = document.querySelector(".B").value.toUpperCase();
            let location = document.querySelector(".C").value;

            if (!person || !location) {
                alert("Please fill out both fields.");
            } else {
                alert("CONGRATULATIONS " + person + ", YOU HAVE SUCCESSFULLY SUBMITTED YOUR REQUEST. ONE AI IS COMING....");
                form.reset();
            }
        }

        button.addEventListener('click', one);
