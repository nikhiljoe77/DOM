var searchButton = document.getElementById('search')
var reportButton = document.getElementById('fetchReport')
window.addEventListener("DOMContentLoaded",()=>{
    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = " ";

})
searchButton.addEventListener("click", displaydate)
function displaydate(event) {
    itemsList.innerHTML = " ";
   event.preventDefault()
    const date = document.getElementById('date').value;
    console.log(`http://localhost:4000/${date}`)
    axios.get(`http://localhost:4000/${date}`)
        .then((response) => {
            console.log(" i am the user", response)
          
            const kiranListItem = document.createElement('li');
            kiranListItem.className = 'list-group-item';

            const aryaListItem = document.createElement('li');
            aryaListItem.className = 'list-group-item';

            if (response.data.status1 === 'p') {
                kiranListItem.textContent = 'Kiran-present';
                const kiranTickButton = document.createElement('button');
                kiranTickButton.className = 'btn btn-success btn-sm float-right tick';
                kiranTickButton.textContent = '✓';
                kiranListItem.appendChild(kiranTickButton);
            } else {
                kiranListItem.textContent = 'Kiran-absent';
                const kiranCrossButton = document.createElement('button');
                kiranCrossButton.className = 'btn btn-danger btn-sm float-right delete';
                kiranCrossButton.textContent = 'X';
                kiranListItem.appendChild(kiranCrossButton);
            }

            if (response.data.status2 === 'p') {
                aryaListItem.textContent = 'Arya-present';
                const aryaTickButton = document.createElement('button');
                aryaTickButton.className = 'btn btn-success btn-sm float-right tick';
                aryaTickButton.textContent = '✓';
                aryaListItem.appendChild(aryaTickButton);
            } else {
                aryaListItem.textContent = 'Arya-absent';
                const aryaCrossButton = document.createElement('button');
                aryaCrossButton.className = 'btn btn-danger btn-sm float-right delete';
                aryaCrossButton.textContent = 'X';
                aryaListItem.appendChild(aryaCrossButton);
            }


            itemsList.appendChild(kiranListItem);
            itemsList.appendChild(aryaListItem);


        })
        .catch(() => {
            const errorMessage = `
            <form id="attendanceForm">
                <ul>
                    <li>
                        <label for="student1">Kiran:</label>
                        <input type="radio" name="student1" value="present" id="student1_present"> Present
                        <input type="radio" name="student1" value="absent" id="student1_absent"> Absent
                    </li>
                    <li>
                        <label for="student2">Arya:</label>
                        <input type="radio" name="student2" value="present" id="student2_present"> Present
                        <input type="radio" name="student2" value="absent" id="student2_absent"> Absent
                    </li>
                    <!-- Add more students here -->
                </ul>
                <button type="submit" id="markAttendance">Mark Attendance</button>
              
            </form>
        `;

            
            const itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = errorMessage;
            var markattButton = document.getElementById('markAttendance')

            markattButton.addEventListener("click", markatt)
            const url = 'http://localhost:4000'
            console.log(url)

            function markatt(event) {
                event.preventDefault()
                const date = document.getElementById('date').value;
                const status1 = document.getElementById('student1_present').checked ? 'p' : 'a';
                const status2 = document.getElementById('student2_present').checked ? 'p' : 'a';
                const attendance = {
                    date,
                    status1,
                    status2
                }
               
                axios.post(`http://localhost:4000/`, attendance)
                    .then((response) => {
                        
                      const itemsList = document.getElementById('itemsList');
                       itemsList.innerHTML = " ";
                        console.log(" i am the user", response)

                        const kiranListItem = document.createElement('li');
                        kiranListItem.className = 'list-group-item';

                        const aryaListItem = document.createElement('li');
                        aryaListItem.className = 'list-group-item';

                        if (response.data.status1 === 'p') {
                            kiranListItem.textContent = 'Kiran-present';
                            const kiranTickButton = document.createElement('button');
                            kiranTickButton.className = 'btn btn-success btn-sm float-right tick';
                            kiranTickButton.textContent = '✓';
                            kiranListItem.appendChild(kiranTickButton);
                        } else {
                            kiranListItem.textContent = 'Kiran-absent';
                            const kiranCrossButton = document.createElement('button');
                            kiranCrossButton.className = 'btn btn-danger btn-sm float-right delete';
                            kiranCrossButton.textContent = 'X';
                            kiranListItem.appendChild(kiranCrossButton);
                        }

                        if (response.data.status2 === 'p') {
                            aryaListItem.textContent = 'Arya-present';
                            const aryaTickButton = document.createElement('button');
                            aryaTickButton.className = 'btn btn-success btn-sm float-right tick';
                            aryaTickButton.textContent = '✓';
                            aryaListItem.appendChild(aryaTickButton);
                        } else {
                            aryaListItem.textContent = 'Arya-absent';
                            const aryaCrossButton = document.createElement('button');
                            aryaCrossButton.className = 'btn btn-danger btn-sm float-right delete';
                            aryaCrossButton.textContent = 'X';
                            aryaListItem.appendChild(aryaCrossButton);
                        }


                      
                        itemsList.appendChild(kiranListItem);
                        itemsList.appendChild(aryaListItem);


                    })
                    .catch((err) => {
                        console.log(err)
                    })

                }

            })

}
reportButton.addEventListener("click", fetchreport)
function fetchreport(event) {
    console.log("FETCH IS WORKING")
    event.preventDefault()
    axios.get(`http://localhost:4000/report`)
    .then((result)=>{
        console.log(result)
      
       const itemsList = document.getElementById('itemsList');
       itemsList.innerHTML = " ";
        let total=result.data.length,k=0,a=0
        console.log(result.data[0].status1)
        for(let i=0;i<result.data.length;i++)
        {
if(result.data[i].status1=='p')
k++
if(result.data[i].status2=='p')
a++
        }
        console.log(k,a)
        let kpercent=(k/total)*100,apercent=(a/total)*100
        const kpercentText = `${kpercent.toFixed(2)}%`;
        const apercentText = `${apercent.toFixed(2)}%`;

const kiranListItem = document.createElement('li');
 kiranListItem.className = 'list-group-item';
 kiranListItem.textContent = `Kiran -        ${k}/${total} -      ${kpercentText}`;

const aryaListItem = document.createElement('li');
 aryaListItem.className = 'list-group-item';
 aryaListItem.textContent = `Arya -          ${a}/${total} -      ${apercentText}`;

 itemsList.appendChild(kiranListItem);
 itemsList.appendChild(aryaListItem);

        
    })
    .catch((err) => {
        console.log(err)
    })

}