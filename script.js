/* fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      console.log(ele[i].name.common);
    }
  }); */

// ------------------------------------------------------------------------------

// Task 1

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = res[i].name.common;
      document.body.append(div);
    }
  });

  //------------------------------------------------------------------------------
