
    function calculateLovePercentage() {
      const sname = document.getElementById('sname').value;
      const fname = document.getElementById('fname').value;

      const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c7ff5542f0mshed3dee78b614073p1efc2cjsn52c09fdd2d3d',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
      };

      fetch(url, options)
        .then(response => response.json())
        .then(data12 => {
          const resultElement = document.getElementById('result');
          resultElement.innerHTML = `<p>Love Percentage: ${data12.percentage}%</p>`;
          
        //   resultElement.innerHTML = `<p>Love Percentage: ${data.result}%</p>`;
        })
        
        .catch(error => console.error('Error:', error));

      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          const resultElement = document.getElementById('reason');
           resultElement.innerHTML = `<p>Love result: ${data.result}</p>`;
        })
        
        .catch(error => console.error('Error:', error));
    }