# Regular-Expression

There is a class name called "invalid-feedback" and "is-invalid" which are really helpfull to show if sth is not keyed in accordingly.

             const input = document.querySelector("#name")
                const regexp = /^[a-zA-Z]{2,10}$/;
                if(!regexp.test(input.value)){
                    input.classList.add("is-invalid")
                }
                else{
                    input.classList.remove("is-invalid")
                }
