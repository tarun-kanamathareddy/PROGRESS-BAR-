function compute() {
    let circle = document.querySelector(".circular-progress");
  
    let progressvalue = document.querySelector(".progress-value");
  
    let bar = document.querySelector(".bar");
    let percent = document.querySelector(".percent");
  
    var i = 0;
  
    let progress = setInterval(() => {
      i++;
  
      progressvalue.innerHTML = i + "%";
  
      circle.style.background = `conic-gradient(green ${ i * 3.6 }deg, rgb(199, 199, 203) 10deg)`;
  
      if (i == 100) {
        clearInterval(progress);
        setTimeout(() => {
          alert("Thank you your order is on the way");
        }, 20);
      }
  
      percent.style.width = i + "%";
      percent.innerHTML =i + "%";
    }, 50);
  }