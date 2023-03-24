

let calcul_grade = document.getElementById('cal_gra');
calcul_grade.addEventListener('click', () => {
    let english = +document.getElementById('english').value;
    let maths = +document.getElementById('maths').value;
    let physics = +document.getElementById('physics').value;
    let chemistry = +document.getElementById('chemistry').value;
    let computer = +document.getElementById('computer').value;
    let average = 0, total = 0; grade = ""
    if((english < 0 || english > 100) || (maths < 0 || maths > 100) || 
    (physics < 0 || physics > 100) || (chemistry < 0 || chemistry > 100) || (computer < 0 || computer > 100)){
        return alert("Please Enter Marks Between 0 to 100 !!")
    }
    total = english + maths + physics + chemistry + computer;
    average = (total/500 )* 100;
    
    if(english <= 35 || maths <= 35 || physics <= 35 || chemistry <= 35 || computer <= 35){
        grade = "F"

    }
    else{
        if(average >= 90){
            grade = "A"
        }
        else if(average >= 80 && average < 90 ){grade = "B"}
        else if(average >= 70 && average < 80 ){grade = "C"}
        else if(average >= 60 && average < 70 ){grade = "D"}
        else if(average >= 35 && average < 60 ){grade = "F"}
        else{
            grade = "Fail"
        }
    }
    document.getElementById('total').innerText = `Total Marks : ${total}`;
    document.getElementById('average').innerText = `Your average marks are : ${average.toFixed(2)}`;
    document.getElementById('grade').innerText = `You got ${grade} grade.`
})