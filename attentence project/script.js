// Function to generate attendance summary
function generateAttendance() {
    // Get attendance values for each student
    const student1 = document.getElementById('student1').value;
    const student2 = document.getElementById('student2').value;
    const student3 = document.getElementById('student3').value;
    const student4 = document.getElementById('student4').value;

    // Create an array of students and their attendance status
    const students = [
        { name: 'Student 1', status: student1 },
        { name: 'Student 2', status: student2 },
        { name: 'Student 3', status: student3 },
        { name: 'Student 4', status: student4 }
    ];

    // Calculate attendance summary
    let presentCount = 0;
    let absentCount = 0;

    students.forEach(student => {
        if (student.status === 'P') {
            presentCount++;
        } else {
            absentCount++;
        }
    });


    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `
        <strong>Attendance Summary:</strong><br>
        Total Present: ${presentCount} <br>
        Total Absent: ${absentCount} <br>
        <br>
        
    `;

    if (presentCount === 4) {
        resultText.innerHTML += "Excellent! All students are present.";
    } else if (absentCount === 0) {
        resultText.innerHTML += "Good job! All students are actively participating.";
    } else if (absentCount === 1) {
        resultText.innerHTML += "One student is absent, but overall attendance is good.";
    } else if (absentCount === 2) {
        resultText.innerHTML += "Two students are absent, please encourage participation.";
    } else {
        resultText.innerHTML += "A significant number of students are absent. Review the engagement.";
    }
}
