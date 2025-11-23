document.addEventListener('DOMContentLoaded', () => {
  // Student data array (will be added by user)
  const data = [ { NAME:"Test" MAT:"123456789"  ]; 


  // Teacher matricules
  const teacherMatricules = ["ITCheckListST13G24", "ITCheckListST13G13"];
  
  // Schedule Data
  let currentStudent = null;

 // Update the schedule data for all groups
const scheduleData = {
  "1": {
    name: "Group 1",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Analysis", location: "Class 373", groups: "1" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 373", groups: "1" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Physics", location: "Class 441", groups: "1" },
        { time: "13:00 - 14:30", course: "TD Analysis", location: "Class 373", groups: "1" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "1,3" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "1,3" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 215", groups: "1" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 243", groups: "1" },
        { time: "9:40 - 11:10", course: "TD Physics", location: "Class 243", groups: "1" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "2": {
    name: "Group 2",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Analysis", location: "Class 375", groups: "2" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 375", groups: "2" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Physics", location: "Class 443", groups: "2" },
        { time: "13:00 - 14:30", course: "TD Analysis", location: "Class 375", groups: "2" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "2,4" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "2,4" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 243", groups: "2" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 245", groups: "2" },
        { time: "9:40 - 11:10", course: "TD Algebra", location: "Class 245", groups: "2" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "3": {
    name: "Group 3",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 377", groups: "3" },
        { time: "9:40 - 11:10", course: "TD Analysis", location: "Class 377", groups: "3" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Analysis", location: "Class 445", groups: "3" },
        { time: "13:00 - 14:30", course: "TD Physics", location: "Class 377", groups: "3" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "1,3" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "1,3" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 245", groups: "3" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 247", groups: "3" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 247", groups: "3" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  },
  "4": {
    name: "Group 4",
    schedule: {
      "Saturday": [
        { time: "8:00 - 9:30", course: "TD Chemistry", location: "Class 379", groups: "4" },
        { time: "9:40 - 11:10", course: "TD Analysis", location: "Class 379", groups: "4" },
        { time: "11:20 - 12:50", course: "Analysis Course", location: "Runway J", groups: "1,2,3,4" }
      ],
      "Sunday": [
        { time: "9:40 - 11:10", course: "Physics Course", location: "Runway P", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TD Analysis", location: "Class 449", groups: "4" },
        { time: "13:00 - 14:30", course: "TD Physics", location: "Class 379", groups: "4" }
      ],
      "Monday": [
        { time: "14:30 - 17:30", course: "TP", location: "Lab", groups: "1,2,3,4" }
      ],
      "Tuesday": [
        { time: "8:00 - 9:30", course: "Ethical and Deontological Dimension", location: "Online", groups: "1,2,3,4" },
        { time: "11:20 - 12:50", course: "TP Of IT", location: "Lab", groups: "2,4" },
        { time: "13:00 - 14:30", course: "TP Of IT", location: "Lab", groups: "2,4" }
      ],
      "Wednesday": [
        { time: "8:00 - 9:30", course: "TD Algebra", location: "Class 259", groups: "4" },
        { time: "9:40 - 11:10", course: "Algebra Course", location: "Class 238T", groups: "1,2,3,4" }
      ],
      "Thursday": [
        { time: "8:00 - 9:30", course: "TD Physics", location: "Class 265", groups: "4" },
        { time: "9:40 - 11:10", course: "TD Chemistry", location: "Class 265", groups: "4" },
        { time: "11:20 - 12:50", course: "Chemistry Course", location: "Runway G", groups: "1,2,3,4" }
      ]
    }
  }
};
  
  let currentTeacherMode = null;
  let teacherStudentList = [];
  let studentToDeleteIndex = null;
  let crossGroupStudent = null;
  let attendanceStatus = null;

  // Week management data - for BOTH teachers
  let weeksData = {
    "ITCheckListST13G24": {},
    "ITCheckListST13G13": {}
  };
  
  let currentWeek = 1;

  // Modal elements
  const deleteModal = document.getElementById('deleteModal');
  const modalStudentInfo = document.getElementById('modalStudentInfo');
  const confirmDeleteBtn = document.getElementById('confirmDelete');
  const cancelDeleteBtn = document.getElementById('cancelDelete');

  const crossGroupModal = document.getElementById('crossGroupModal');
  const crossGroupMessage = document.getElementById('crossGroupMessage');
  const crossGroupStudentInfo = document.getElementById('crossGroupStudentInfo');
  const correctTeacherMatricule = document.getElementById('correctTeacherMatricule');
  const correctGroup = document.getElementById('correctGroup');
  const attendanceYes = document.getElementById('attendanceYes');
  const attendanceNo = document.getElementById('attendanceNo');
  const saveCrossGroupBtn = document.getElementById('saveCrossGroup');

  // Hamburger menu elements
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const closeSidebar = document.getElementById('closeSidebar');
  const weekButtons = document.getElementById('weekButtons');
  const addWeekButton = document.getElementById('addWeekButton');

  // Teacher input elements
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const teacherInputs = document.getElementById('teacherInputs');
  const groupInput = document.getElementById('groupInput');
  const addStudentButton = document.getElementById('addStudentButton');
  const saveButton = document.getElementById('saveButton');
  const result = document.getElementById('result');
  const teacherListContainer = document.getElementById('teacherListContainer');

  // Week delete modal elements
  const deleteWeekModal = document.getElementById('deleteWeekModal');
  const modalWeekInfo = document.getElementById('modalWeekInfo');
  const confirmWeekDeleteBtn = document.getElementById('confirmWeekDelete');
  const cancelWeekDeleteBtn = document.getElementById('cancelWeekDelete');
  let weekToDelete = null;

  // Student elements
  const studentSidebar = document.getElementById('studentSidebar');
  const studentSidebarOverlay = document.getElementById('studentSidebarOverlay');
  const closeStudentSidebar = document.getElementById('closeStudentSidebar');
  const groupButtons = document.getElementById('groupButtons');
  const studentScheduleTable = document.getElementById('studentScheduleTable');
  const studentHamburgerMenu = document.getElementById('studentHamburgerMenu');

  // === HAMBURGER MENU FUNCTIONS ===

  // Show sidebar - for BOTH teacher modes
  function showSidebar() {
    if (sidebar && currentTeacherMode) {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Update sidebar title with teacher name
      const sidebarTitle = document.querySelector('.sidebar h3');
      if (sidebarTitle) {
        sidebarTitle.textContent = `${currentTeacherMode} - Week Management`;
      }
      
      // Hide hamburger button
      if (hamburgerMenu) {
        hamburgerMenu.style.display = 'none';
      }
    }
  }

  // Hide sidebar with 200ms delay
  function hideSidebar() {
    if (sidebar) {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // 200ms delay before showing hamburger button again
      setTimeout(() => {
        if (hamburgerMenu && currentTeacherMode) {
          hamburgerMenu.style.display = 'flex';
        }
      }, 200);
    }
  }

  // === MODAL FUNCTIONS ===

  function showDeleteModal(student, index) {
    studentToDeleteIndex = index;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    modalStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | TP Group: ${student.GRP_TP} | GroupN: ${student.GroupN || 'Not set'}<br>
      Matricule: ${student.MAT}
    `;
    
    deleteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideDeleteModal() {
    deleteModal.classList.remove('active');
    studentToDeleteIndex = null;
    document.body.style.overflow = '';
  }

  function showCrossGroupModal(student) {
    crossGroupStudent = student;
    attendanceStatus = null;
    
    correctTeacherMatricule.value = '';
    correctGroup.value = '';
    attendanceYes.classList.remove('selected');
    attendanceNo.classList.remove('selected');
    saveCrossGroupBtn.disabled = true;
    
    const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
    
    let correctTeacher, warningMessage;

    // Determine correct teacher based on student's GroupN
    if (student.GroupN === "1" || student.GroupN === "3") {
      correctTeacher = "ITCheckListST13G13";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> has GroupN ${student.GroupN} (belongs to Teacher for Groups 1 & 3).`;
    } else if (student.GroupN === "2" || student.GroupN === "4") {
      correctTeacher = "ITCheckListST13G24";
      warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> has GroupN ${student.GroupN} (belongs to Teacher for Groups 2 & 4).`;
    } else {
      // If no GroupN assigned, use old TP group logic as fallback
      if (["A", "B", "C"].includes(student.GRP_TP)) {
        correctTeacher = "ITCheckListST13G13";
        warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 2 Or 4.`;
      } else {
        correctTeacher = "ITCheckListST13G24";
        warningMessage = `This Student <strong>"${student.MAT} - ${formattedName} ${formattedPname}"</strong> is NOT from Group 1 Or 3.`;
      }
    }
    
    crossGroupMessage.innerHTML = warningMessage;
    crossGroupStudentInfo.innerHTML = `
      <strong>${formattedName} ${formattedPname}</strong><br>
      Section: ${student.SECT} | TP Group: ${student.GRP_TP} | GroupN: ${student.GroupN || 'Not set'}<br>
      Matricule: ${student.MAT}<br>
      <strong>Correct Teacher: ${correctTeacher}</strong>
    `;
    
    correctTeacherMatricule.value = correctTeacher;
    crossGroupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideCrossGroupModal() {
    crossGroupModal.classList.remove('active');
    crossGroupStudent = null;
    attendanceStatus = null;
    document.body.style.overflow = '';
  }

  function checkCrossGroupForm() {
    const teacherValid = teacherMatricules.includes(correctTeacherMatricule.value.trim());
    const groupValid = correctGroup.value.trim().length > 0;
    const attendanceValid = attendanceStatus !== null;
    
    saveCrossGroupBtn.disabled = !(teacherValid && groupValid && attendanceValid);
  }

  // === WEEK MANAGEMENT FUNCTIONS ===

  // Show week menu for BOTH teachers
  function showWeekMenu() {
    if (hamburgerMenu && currentTeacherMode) {
      hamburgerMenu.style.display = 'flex';
      updateWeekButtons();
    } else if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
  }

  function hideWeekMenu() {
    if (hamburgerMenu) {
      hamburgerMenu.style.display = 'none';
    }
    hideSidebar();
  }

  function updateWeekButtons() {
    if (!weekButtons) return;
    
    weekButtons.innerHTML = '';
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    
    weekNumbers.forEach(weekNum => {
      const weekItem = document.createElement('div');
      weekItem.className = 'week-item';
      
      const weekItemContent = document.createElement('div');
      weekItemContent.className = 'week-item-content';
      
      const weekBtn = document.createElement('button');
      weekBtn.className = `week-btn ${weekNum === currentWeek ? 'active' : ''}`;
      
      const weekData = teacherWeeks[weekNum];
      const displayName = weekData?.customName || `Week ${weekNum}`;
      weekBtn.textContent = displayName;
      weekBtn.onclick = () => loadWeek(weekNum);
      
      const renameWeekBtn = document.createElement('button');
      renameWeekBtn.className = 'rename-week-btn';
      renameWeekBtn.innerHTML = '✏️';
      renameWeekBtn.title = 'Rename Week';
      renameWeekBtn.onclick = (e) => {
        e.stopPropagation();
        showRenamePopup(weekNum);
      };
      
      const deleteWeekBtn = document.createElement('button');
      deleteWeekBtn.className = 'delete-week-btn';
      deleteWeekBtn.innerHTML = '🗑️';
      deleteWeekBtn.title = 'Delete Week';
      deleteWeekBtn.onclick = (e) => {
        e.stopPropagation();
        deleteWeek(weekNum);
      };
      
      if (weekNumbers.length <= 1 || weekNum === currentWeek) {
        deleteWeekBtn.disabled = true;
      }
      
      weekItemContent.appendChild(weekBtn);
      weekItemContent.appendChild(renameWeekBtn);
      weekItemContent.appendChild(deleteWeekBtn);
      weekItem.appendChild(weekItemContent);
      weekButtons.appendChild(weekItem);
    });
  }

  function showRenamePopup(weekNum) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    
    const weekData = weeksData[currentTeacherMode][weekNum] || {};
    const currentName = weekData.customName || `Week ${weekNum}`;
    
    const popup = document.createElement('div');
    popup.className = 'rename-popup';
    
    popup.innerHTML = `
      <h3>Rename Week</h3>
      <div class="rename-input-group">
        <label for="renameWeekInput">New Name:</label>
        <input type="text" id="renameWeekInput" value="${currentName}" placeholder="Enter week name..." />
      </div>
      <div class="popup-buttons">
        <button id="cancelRename">Cancel</button>
        <button id="confirmRename">Rename</button>
      </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    const input = document.getElementById('renameWeekInput');
    input.focus();
    input.select();
    
    document.getElementById('cancelRename').onclick = () => {
      document.body.removeChild(overlay);
    };
    
    document.getElementById('confirmRename').onclick = () => {
      confirmRename(weekNum, overlay);
    };
    
    input.onkeypress = (e) => {
      if (e.key === 'Enter') {
        confirmRename(weekNum, overlay);
      }
    };
    
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    };
  }

  function confirmRename(weekNum, overlay) {
    const input = document.getElementById('renameWeekInput');
    const newName = input.value.trim();
    
    if (!newName) {
      alert('Please enter a week name');
      return;
    }
    
    document.body.removeChild(overlay);
    
    if (!weeksData[currentTeacherMode][weekNum]) {
      weeksData[currentTeacherMode][weekNum] = {};
    }
    
    weeksData[currentTeacherMode][weekNum].customName = newName;
    
    saveToLocalStorage();
    updateWeekButtons();
    
    if (weekNum === currentWeek) {
      loadWeek(weekNum);
    } else {
      updateAllWeekDisplays(weekNum, newName);
    }
    
    result.innerHTML = `<div class="teacher-mode">✅ Week renamed to "${newName}"</div>`;
  }

  function updateAllWeekDisplays(weekNum, weekName) {
    if (weekNum === currentWeek) {
      if (document.title.includes('Week')) {
        document.title = document.title.replace(/Week\s*\d+/, weekName);
      }
      
      const weekHeadings = document.querySelectorAll('h1, h2, h3, h4, .week-display, .current-week');
      weekHeadings.forEach(element => {
        if (element.textContent.includes('Week')) {
          element.textContent = element.textContent.replace(/Week\s*\d+/, weekName);
        }
      });
      
      if (result.innerHTML.includes('Week')) {
        result.innerHTML = result.innerHTML.replace(/Week\s*\d+/g, weekName);
      }
      
      const sidebarTitle = document.querySelector('.sidebar h3');
      if (sidebarTitle && sidebarTitle.textContent.includes('Week')) {
        sidebarTitle.textContent = sidebarTitle.textContent.replace(/Week\s*\d+/, weekName);
      }
    }
  }

  function loadWeek(weekNumber) {
    if (!currentTeacherMode) return;
    
    currentWeek = weekNumber;
    const weekData = weeksData[currentTeacherMode][weekNumber] || [];
    
    const displayName = weekData.customName || `Week ${weekNumber}`;
    
    updateAllWeekDisplays(weekNumber, displayName);
    
    displayTeacherList();
    updateWeekButtons();
  }

  function displayTeacherData(weekData) {
    if (!result) return;
    
    const displayName = weekData.customName || `Week ${currentWeek}`;
    
    let html = `<div class="teacher-mode">
      <h3>${displayName} - Students List</h3>`;
    
const students = Array.isArray(weekData) ? weekData : (weekData.students || []);
  
if (students.length === 0) {
  html += `<p>No students added for this week yet.</p>`;
} else {
      html += `
        <table class="teacher-list">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Group</th>
              <th>Attendance</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>`;
      students.forEach((student, index) => {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        const itGroup = student.customGroup || student.GRP_TP;
        const inWrongGroup = isStudentInWrongGroup(student);
        
        html += `
          <tr>
            <td>${formattedName} ${formattedPname}</td>
            <td>
              <input type="text" 
                     class="group-input" 
                     value="${itGroup}" 
                     data-index="${index}"
                     placeholder="Group">
            </td>
            <td>
              <input type="checkbox" 
                     class="attendance-checkbox" 
                     data-index="${index}"
                     ${student.present ? 'checked' : ''}>
            </td>
            <td>
              ${student.note ? `
                <div class="note-text">
                  ${student.note}
                  <span class="remove-note" data-index="${index}">✕</span>
                </div>
              ` : ''}
              ${inWrongGroup ? `
                <div class="note-text" style="color: #ff4444;">
                  From other group
                </div>
              ` : ''}
            </td>
            <td>
              <button class="delete-button" data-index="${index}">Delete</button>
            </td>
          </tr>
        `;
      });
      
      html += `
          </tbody>
        </table>`;
    }
    
    html += `</div>`;
    result.innerHTML = html;
    
    addTableEventListeners();
  }

  function addTableEventListeners() {
    result.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].present = this.checked;
          saveToLocalStorage();
        }
      });
    });
    
    result.querySelectorAll('.group-input').forEach(input => {
      input.addEventListener('change', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].customGroup = this.value;
          saveToLocalStorage();
        }
      });
    });
    
    result.querySelectorAll('.remove-note').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          weekData[index].note = '';
          saveToLocalStorage();
          displayTeacherData(weekData);
        }
      });
    });
    
    result.querySelectorAll('.delete-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        const weekData = weeksData[currentTeacherMode][currentWeek];
        if (weekData && weekData[index]) {
          const student = weekData[index];
          showDeleteModal(student, index);
        }
      });
    });
  }

  function saveToLocalStorage() {
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
  }

  function addWeek() {
    if (!currentTeacherMode) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    const newWeekNumber = weekNumbers.length > 0 ? Math.max(...weekNumbers) + 1 : 1;
    
    const newWeekData = {
      customName: `Week ${newWeekNumber}`,
      students: []
    };
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    weeksData[currentTeacherMode][newWeekNumber] = newWeekData;
    currentWeek = newWeekNumber;
    teacherStudentList = [];
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    updateWeekButtons();
    
    displayTeacherList();
    
    result.innerHTML = `<div class="teacher-mode">✅ Week ${newWeekNumber} created successfully!</div>`;
  }

  function deleteWeek(weekNumber) {
    if (!currentTeacherMode) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const weekNumbers = Object.keys(teacherWeeks).map(Number).sort((a, b) => a - b);
    
    if (weekNumbers.length <= 1) {
      alert("Cannot delete the only week!");
      return;
    }
    
    showDeleteWeekModal(weekNumber);
  }

  function showDeleteWeekModal(weekNumber) {
    weekToDelete = weekNumber;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    const studentCount = teacherWeeks[weekNumber] ? teacherWeeks[weekNumber].length : 0;
    
    modalWeekInfo.innerHTML = `
      <strong>Week ${weekNumber}</strong><br>
      Students in this week: ${studentCount}<br>
      Current Week: ${weekNumber === currentWeek ? 'Yes ⭐' : 'No'}
    `;
    
    deleteWeekModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideDeleteWeekModal() {
    deleteWeekModal.classList.remove('active');
    weekToDelete = null;
    document.body.style.overflow = '';
  }

  function confirmWeekDelete() {
    if (!weekToDelete) return;
    
    const teacherWeeks = weeksData[currentTeacherMode] || {};
    
    delete weeksData[currentTeacherMode][weekToDelete];
    
    if (weekToDelete === currentWeek) {
      const remainingWeeks = Object.keys(weeksData[currentTeacherMode]).map(Number).sort((a, b) => a - b);
      currentWeek = remainingWeeks[0] || 1;
      loadWeek(currentWeek);
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    
    updateWeekButtons();
    
    result.innerHTML = `<div class="teacher-mode">🗑️ Week ${weekToDelete} deleted successfully!</div>`;
    hideDeleteWeekModal();
  }

  function saveCurrentWeek() {
    if (!currentTeacherMode) {
      alert("Please activate teacher mode first!");
      return;
    }
    
    const crossGroupStudents = teacherStudentList.filter(student => 
      isStudentInWrongGroup(student)
    );
    
    if (crossGroupStudents.length > 0) {
      showCrossGroupModal(crossGroupStudents[0]);
      return;
    }
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    const currentWeekData = weeksData[currentTeacherMode][currentWeek];
    const currentCustomName = currentWeekData?.customName || `Week ${currentWeek}`;
    
    weeksData[currentTeacherMode][currentWeek] = {
      customName: currentCustomName,
      students: teacherStudentList
    };
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    result.innerHTML = `<div class="teacher-mode">✅ ${currentCustomName} saved successfully!</div>`;
  }

  // === UTILITY FUNCTIONS ===

  function getLabInfo(grpTP) {
    let chemistryLab = "";
    let physicsLab = "";
    let week1 = "";
    let week2 = "";

    if (grpTP === "A" || grpTP === "D") {
      chemistryLab = "A204";
      physicsLab = "C104";
    } else if (grpTP === "B" || grpTP === "E") {
      chemistryLab = "A205";
      physicsLab = "C105";
    } else if (grpTP === "C" || grpTP === "F") {
      chemistryLab = "A206";
      physicsLab = "C106";
    }

    if (grpTP === "A" || grpTP === "B" || grpTP === "C") {
      week1 = "Physics Lab";
      week2 = "Chemistry Lab";
    } else {
      week1 = "Chemistry Lab";
      week2 = "Physics Lab";
    }

    return { chemistryLab, physicsLab, week1, week2 };
  }

// === MODE MANAGEMENT FUNCTIONS ===

function activateTeacherMode(teacherMatricule) {
  // Deactivate student mode first
  deactivateStudentMode();
  
  // Activate teacher mode
  currentTeacherMode = teacherMatricule;
  
  // Initialize teacherStudentList from current week data
  const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
  if (currentWeekData && currentWeekData.students) {
    teacherStudentList = currentWeekData.students;
  } else {
    teacherStudentList = [];
  }
  
  result.innerHTML = `<div class="teacher-mode">🎓 Teacher Mode Activated (${teacherMatricule})</div>`;
  searchInput.value = '';
  searchInput.placeholder = "Enter student matricule";
  teacherInputs.style.display = 'flex';
  
  // Show teacher hamburger button
  showWeekMenu();
  loadWeek(currentWeek);
  
  // Hide student elements
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
  
// Hide student schedule display initially
const studentScheduleDisplay = document.getElementById('studentScheduleDisplay');
if (studentScheduleDisplay) {
  studentScheduleDisplay.style.display = 'none';
  studentScheduleDisplay.innerHTML = '';
}
  
  currentStudent = null;
}

function activateStudentMode(student) {
  // Deactivate teacher mode first
  deactivateTeacherMode();
  
  // Activate student mode
  currentStudent = student;
  
  // Clear teacher elements
  teacherInputs.style.display = 'none';
  teacherListContainer.innerHTML = '';
  
  // Hide teacher hamburger
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';
  }
  
  // Show student hamburger button
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'flex';
  }
  
  // Display student results
  displayStudentResults(student);
}

function deactivateTeacherMode() {
  currentTeacherMode = null;
  teacherStudentList = [];
  teacherInputs.style.display = 'none';
  teacherListContainer.innerHTML = '';
  
  // Hide teacher hamburger
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';
  }
  
  // Close teacher sidebar if open
  hideSidebar();
}

function deactivateStudentMode() {
  currentStudent = null;
  
  // Hide student hamburger
  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
  
  // Close student sidebar if open
  hideStudentSidebar();
  
// Hide student schedule display
const studentScheduleDisplay = document.getElementById('studentScheduleDisplay');
if (studentScheduleDisplay) {
  studentScheduleDisplay.style.display = 'none';
  studentScheduleDisplay.innerHTML = '';
}
}
  function formatNameForTeacher(name, pname) {
    const formattedName = name.toUpperCase();
    const formattedPname = pname.charAt(0).toUpperCase() + pname.slice(1).toLowerCase();
    return { formattedName, formattedPname };
  }

  // Get correct teacher for student based ONLY on GroupN
  function getCorrectTeacherForStudent(student) {
    // ONLY use GroupN - completely ignore TP groups
    if (student.GroupN === "1" || student.GroupN === "3") {
      return "ITCheckListST13G13";
    } else if (student.GroupN === "2" || student.GroupN === "4") {
      return "ITCheckListST13G24";
    }
    
    // If no GroupN assigned yet, no restrictions
    return null;
  }

  // Check if student is in wrong group for current teacher
  function isStudentInWrongGroup(student) {
    const correctTeacher = getCorrectTeacherForStudent(student);
    // Only check if GroupN is assigned, otherwise no restrictions
    return correctTeacher !== null && correctTeacher !== currentTeacherMode;
  }

  // === STUDENT MANAGEMENT FUNCTIONS ===

  function deleteStudent(index) {
    teacherStudentList.splice(index, 1);
    displayTeacherList();
    result.innerHTML = `<div class="teacher-mode">🗑️ Student removed from the table</div>`;
  }

  function saveCrossGroupStudent() {
    const correctTeacher = correctTeacherMatricule.value.trim();
    const studentGroup = correctGroup.value.trim();
    
    const correctedStudent = {
      ...crossGroupStudent,
      customGroup: studentGroup,
      present: attendanceStatus,
      note: `Came with ${currentTeacherMode} groups in last session`
    };
    
    if (!weeksData[correctTeacher]) {
      weeksData[correctTeacher] = {};
    }
    if (!weeksData[correctTeacher][currentWeek]) {
      weeksData[correctTeacher][currentWeek] = [];
    }
    
    if (!weeksData[correctTeacher][currentWeek].some(s => s.MAT === correctedStudent.MAT)) {
      weeksData[correctTeacher][currentWeek].push(correctedStudent);
    }
    
    const index = teacherStudentList.findIndex(s => s.MAT === crossGroupStudent.MAT);
    if (index !== -1) {
      teacherStudentList.splice(index, 1);
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    displayTeacherList();
    
    result.innerHTML = `<div class="teacher-mode">
      ✅ Cross-group student saved to ${correctTeacher} table<br>
      Attendance: ${attendanceStatus ? 'Present ✓' : 'Absent ✗'}
    </div>`;
  }

  function displayTeacherList() {
    // ... (copy the full displayTeacherList function from your original code)
  }

  // === SEARCH AND STUDENT ADDITION FUNCTIONS ===

   // Search for student or activate teacher mode
  function searchInfo() {
    const mat = searchInput.value.trim();
    result.textContent = "";

    if (!mat) {
      result.textContent = "⚠️ Please enter a matricule number.";
      return;
    }

    // Check if it's a teacher matricule
    if (teacherMatricules.includes(mat)) {
      activateTeacherMode(mat);
      return;
    }

    const student = data.find(s => s.MAT === mat);
    if (!student) {
      result.textContent = `❌ No student found with matricule "${mat}".`;
      return;
    }

    // If we're in teacher mode and found a student, add to teacher list
    if (currentTeacherMode) {
      // Get current students from BOTH data structures to check for duplicates
      const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
      let currentStudents = [];
      
      if (currentWeekData) {
        if (Array.isArray(currentWeekData)) {
          // Old structure
          currentStudents = currentWeekData;
        } else if (currentWeekData.students) {
          // New structure
          currentStudents = currentWeekData.students;
        }
      }
      
      // Also check teacherStudentList as backup
      if (currentStudents.length === 0) {
        currentStudents = teacherStudentList;
      }
      
      // Check if student already exists in the current week
      const alreadyExists = currentStudents.some(s => s.MAT === student.MAT);
      
      if (alreadyExists) {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        result.innerHTML = `
          <div class="teacher-mode">
            ⚠️ <strong>Student already in table!</strong><br>
            ${formattedName} ${formattedPname} is already in the current week's list.<br>
            Please search for a different student.
          </div>
        `;
      } else {
        const { formattedName, formattedPname } = formatNameForTeacher(student.NAME, student.PNAME);
        
        result.innerHTML = `
          <div class="teacher-mode">
            ✅ Found: ${formattedName} ${formattedPname} | Section ${student.SECT} | TP Group: ${student.GRP_TP}<br>
            Enter <strong>GroupN (1, 2, 3, or 4)</strong> and click "Add Student"<br>
            <small>Note: GroupN is independent from TP Group</small>
          </div>
        `;
        
        window.currentStudentToAdd = student;
      }
    } else {
      // Activate student mode
      activateStudentMode(student);
    }
  }

  function addStudentWithGroup() {
    const groupInputValue = groupInput.value.trim();
    
    if (!window.currentStudentToAdd) {
      result.innerHTML = `<div class="teacher-mode">⚠️ Please search for a student first!</div>`;
      return;
    }
    
    if (!groupInputValue) {
      result.innerHTML = `<div class="teacher-mode">⚠️ Please enter a group number!</div>`;
      return;
    }
    
    if (!["1", "2", "3", "4"].includes(groupInputValue)) {
      result.innerHTML = `
        <div class="teacher-mode" style="border: 2px solid #ff4444; background: #ffeaea; padding: 15px; border-radius: 8px;">
          🚫 <strong>INVALID GROUP NUMBER!</strong><br><br>
          Please enter a valid GroupN: <strong>1, 2, 3, or 4</strong><br>
          You entered: <strong>${groupInputValue}</strong>
        </div>
      `;
      return;
    }
    
    const studentToAdd = {
      ...window.currentStudentToAdd,
      GroupN: groupInputValue,
      customGroup: groupInputValue,
      present: false
    };
    
    const correctTeacher = getCorrectTeacherForStudent(studentToAdd);
    const isWrongTeacher = correctTeacher !== null && correctTeacher !== currentTeacherMode;
    
    if (isWrongTeacher) {
      const { formattedName, formattedPname } = formatNameForTeacher(studentToAdd.NAME, studentToAdd.PNAME);
      let correctTeacherName = "";
      
      if (correctTeacher === "ITCheckListST13G24") {
        correctTeacherName = "Teacher for Groups 2 & 4 (ITCheckListST13G24)";
      } else if (correctTeacher === "ITCheckListST13G13") {
        correctTeacherName = "Teacher for Groups 1 & 3 (ITCheckListST13G13)";
      }

      result.innerHTML = `
        <div class="teacher-mode" style="border: 2px solid #ff4444; background: #ffeaea; padding: 15px; border-radius: 8px;">
          🚫 <strong>This Table Is for Group 1 Or 3 Students</strong><br><br>
          You tried to add a student with <strong>GroupN ${groupInputValue}</strong><br>
          Please switch to the correct teacher table.
        </div>
      `;
      window.currentStudentToAdd = null;
      return;
    }
    
    const currentWeekData = weeksData[currentTeacherMode]?.[currentWeek];
    let currentStudents = [];
    
    if (currentWeekData) {
      if (Array.isArray(currentWeekData)) {
        currentStudents = currentWeekData;
      } else if (currentWeekData.students) {
        currentStudents = currentWeekData.students;
      }
    }
    
    const alreadyExists = currentStudents.some(s => s.MAT === window.currentStudentToAdd.MAT);
    
    if (alreadyExists) {
      const { formattedName, formattedPname } = formatNameForTeacher(window.currentStudentToAdd.NAME, window.currentStudentToAdd.PNAME);
      result.innerHTML = `
        <div class="teacher-mode">
          ⚠️ <strong>Cannot add duplicate student!</strong><br>
          ${formattedName} ${formattedPname} is already in the table.<br>
          Please search for a different student.
        </div>
      `;
      window.currentStudentToAdd = null;
      return;
    }
    
    teacherStudentList.push(studentToAdd);
    
    if (!weeksData[currentTeacherMode]) {
      weeksData[currentTeacherMode] = {};
    }
    
    const currentWeekDataUpdated = weeksData[currentTeacherMode][currentWeek];
    if (currentWeekDataUpdated && currentWeekDataUpdated.students) {
      currentWeekDataUpdated.students.push(studentToAdd);
    } else {
      const displayName = currentWeekDataUpdated?.customName || `Week ${currentWeek}`;
      weeksData[currentTeacherMode][currentWeek] = {
        customName: displayName,
        students: [studentToAdd]
      };
    }
    
    localStorage.setItem('weeksData', JSON.stringify(weeksData));
    
    displayTeacherList();
    
    const { formattedName, formattedPname } = formatNameForTeacher(studentToAdd.NAME, studentToAdd.PNAME);
    
    result.innerHTML = `<div class="teacher-mode">
      ✅ Added: ${formattedName} ${formattedPname} | Section ${studentToAdd.SECT} | GroupN: ${groupInputValue} | ${studentToAdd.MAT}
    </div>`;
    
    searchInput.value = '';
    groupInput.value = '';
    window.currentStudentToAdd = null;
  }




    function displayStudentResults(student) {
    const labInfo = getLabInfo(student.GRP_TP);
    const info = `${student.NAME} ${student.PNAME} — Section ${student.SECT} — Group ${student.GRP_TP}`;
    const lines = info.split('—').map(s => s.trim());
    
    result.innerHTML = lines.map((line, i) =>
        `<p class="result-line" style="animation-delay:${i * 0.4}s">${line}</p>`).join('');
    
    result.innerHTML += `<p class="result-line" style="animation-delay:${lines.length * 0.4}s">Matricule: ${student.MAT}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 1) * 0.4}s">🧪 Chemistry Lab: ${labInfo.chemistryLab}</p>`;
    result.innerHTML += `<p class="result-line" style="animation-delay:${(lines.length + 2) * 0.4}s">⚛️ Physics Lab: ${labInfo.physicsLab}</p>`;
    
;
    
    // Reinitialize all timers with the new student data
    setTimeout(() => {
        initializeAllTimers();
    }, 100);
}

  // === STUDENT SIDEBAR FUNCTIONS ===

  function showStudentSidebar() {
    if (studentSidebar && currentStudent) {
      studentSidebar.classList.add('active');
      studentSidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideStudentSidebar() {
    if (studentSidebar) {
      studentSidebar.classList.remove('active');
      studentSidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function loadGroupSchedule(groupNumber) {
  const existingSchedule = document.getElementById('studentScheduleDisplay');
  if (!existingSchedule) return;
  const groupData = scheduleData[groupNumber];
  if (!groupData) return;
  
  // Use the current student's GRP_TP for Monday TP, not derived from group number
  const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
  const nextMondayTP = getNextLabDateAndType(tpGroup);
  
  let html = `<h3>📚 Weekly Schedule for ${groupData.name}</h3>`;
  
  const timeSlots = [
    "8:00 - 9:30",
    "9:40 - 11:10", 
    "11:20 - 12:50",
    "13:00 - 14:30",
    "14:30 - 17:30"
  ];
  
  const daysOrder = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  
  html += `
    <div class="timetable">
      <table class="schedule-table">
        <thead>
          <tr>
            <th class="day-header">Day/Time</th>
  `;
  
  timeSlots.forEach(timeSlot => {
    html += `<th class="time-header">${timeSlot}</th>`;
  });
  
  html += `
          </tr>
        </thead>
        <tbody>
  `;
  
  daysOrder.forEach(day => {
    html += `<tr><td class="day-cell">${day}</td>`;
    
    const daySchedule = groupData.schedule[day] || [];
    
    timeSlots.forEach(timeSlot => {
      const session = daySchedule.find(s => s.time === timeSlot);
      
      if (session) {
        let displayText = `${session.course}<br><small>${session.location}</small>`;
        
        if (day === "Monday" && timeSlot === "14:30 - 17:30" && session.course === "TP") {
          displayText = `
            <strong>${nextMondayTP.displayName}</strong><br>
            <small>${session.location}</small>
            <div class="small-tp-timer" id="schedule-monday-tp-timer-${groupNumber}">
              <div class="small-timer-label">⏰ Next Session</div>
              <div class="small-timer-display">--:--:--</div>
            </div>
          `;
        } else if (day === "Tuesday" && (timeSlot === "11:20 - 12:50" || timeSlot === "13:00 - 14:30") && session.course.includes('TP Of IT') && session.groups.includes(groupNumber)) {
          displayText = `
            <div class="tp-it-note">⏰ Start At 12:30</div>
            <strong>${session.course}</strong><br>
            <small>${session.location}</small>
            <div class="small-tp-timer" id="schedule-tp-it-timer-${groupNumber}">
              <div class="small-timer-label">⏰ Next Session</div>
              <div class="small-timer-display">--:--:--</div>
            </div>
          `;
        }
        
        html += `<td class="session-cell">${displayText}</td>`;
      } else {
        html += `<td class="empty-cell">/</td>`;
      }
    });
    
    html += `</tr>`;
  });
  
  html += `
        </tbody>
      </table>
    </div>
    
    <div class="small-timers-summary">
      <h4>⏰ Upcoming TP Sessions</h4>
      <div id="smallTimersContainer-${groupNumber}"></div>
    </div>
  `;
  
  existingSchedule.innerHTML = html;
  
  const timers = initializeScheduleTPTimers(groupNumber);
  const timersContainer = document.getElementById(`smallTimersContainer-${groupNumber}`);
  if (timersContainer) {
    timersContainer.innerHTML = timers.mondayTP + timers.tpIt;
  }
  
  setTimeout(() => {
    startSmallTPTimers(groupNumber);
    
    const mondayTP = getNextLabDateAndType(tpGroup);
    startSingleSmallTimer(`schedule-monday-tp-timer-${groupNumber}`, mondayTP.date, mondayTP.displayName, groupNumber);
    
    if (groupData.schedule["Tuesday"]?.some(s => s.course.includes('TP Of IT') && s.groups.includes(groupNumber))) {
      startSingleSmallTimer(`schedule-tp-it-timer-${groupNumber}`, getNextTPOfITDate(groupNumber), 'TP Of IT', groupNumber);
    }
  }, 100);
  
  hideStudentSidebar();
}

  function startStudentHamburgerAnimation() {
    if (!studentHamburgerMenu) return;

    let animationId;
    let isAnimating = false;

    studentHamburgerMenu.addEventListener('mouseenter', function() {
      if (isAnimating) return;
      isAnimating = true;
      animateStudent();
    });

    studentHamburgerMenu.addEventListener('mouseleave', function() {
      isAnimating = false;
      cancelAnimationFrame(animationId);
      
      const leftLeg = studentHamburgerMenu.querySelector('.left-leg');
      const rightLeg = studentHamburgerMenu.querySelector('.right-leg');
      const leftHand = studentHamburgerMenu.querySelector('.left-hand');
      const rightHand = studentHamburgerMenu.querySelector('.right-hand');
      const bodyLine = studentHamburgerMenu.querySelector('.body-line');
      const headLine = studentHamburgerMenu.querySelector('.head-line');
      
      if (leftLeg) leftLeg.style.transform = 'rotate(0deg)';
      if (rightLeg) rightLeg.style.transform = 'rotate(0deg)';
      if (leftHand) leftHand.style.transform = 'rotate(0deg)';
      if (rightHand) rightHand.style.transform = 'rotate(0deg)';
      if (bodyLine) bodyLine.style.transform = 'translateX(-50%) rotate(0deg)';
      if (headLine) headLine.style.transform = 'translateX(-50%) rotate(0deg)';
    });

    function animateStudent() {
      if (!isAnimating) return;

      const time = Date.now() * 0.005;
      const leftLeg = studentHamburgerMenu.querySelector('.left-leg');
      const rightLeg = studentHamburgerMenu.querySelector('.right-leg');
      const leftHand = studentHamburgerMenu.querySelector('.left-hand');
      const rightHand = studentHamburgerMenu.querySelector('.right-hand');
      const bodyLine = studentHamburgerMenu.querySelector('.body-line');
      const headLine = studentHamburgerMenu.querySelector('.head-line');

      if (leftLeg) leftLeg.style.transform = `rotate(${Math.sin(time) * 25}deg)`;
      if (rightLeg) rightLeg.style.transform = `rotate(${-Math.sin(time) * 25}deg)`;

      if (leftHand) leftHand.style.transform = `rotate(${Math.sin(time + 1) * 8}deg)`;
      if (rightHand) rightHand.style.transform = `rotate(${-Math.sin(time + 1) * 8}deg)`;

      if (bodyLine) bodyLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5) * 2}deg)`;
      if (headLine) headLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5 + 0.5) * 1.5}deg)`;

      animationId = requestAnimationFrame(animateStudent);
    }
  }

  // === EVENT LISTENERS ===

  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      if (studentToDeleteIndex !== null) {
        deleteStudent(studentToDeleteIndex);
        hideDeleteModal();
      }
    });
  }

  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', hideDeleteModal);
  }

  if (attendanceYes) {
    attendanceYes.addEventListener('click', () => {
      attendanceStatus = true;
      attendanceYes.classList.add('selected');
      if (attendanceNo) attendanceNo.classList.remove('selected');
      checkCrossGroupForm();
    });
  }

  if (attendanceNo) {
    attendanceNo.addEventListener('click', () => {
      attendanceStatus = false;
      attendanceNo.classList.add('selected');
      if (attendanceYes) attendanceYes.classList.remove('selected');
      checkCrossGroupForm();
    });
  }

  if (correctTeacherMatricule) {
    correctTeacherMatricule.addEventListener('input', checkCrossGroupForm);
  }

  if (correctGroup) {
    correctGroup.addEventListener('input', checkCrossGroupForm);
  }

  if (saveCrossGroupBtn) {
    saveCrossGroupBtn.addEventListener('click', () => {
      if (crossGroupStudent && attendanceStatus !== null) {
        saveCrossGroupStudent();
        hideCrossGroupModal();
      }
    });
  }

  // Hamburger menu events - available for BOTH teacher modes
  if (hamburgerMenu) {
    // Hide hamburger by default
    hamburgerMenu.style.display = 'none';
    
    hamburgerMenu.addEventListener('click', function() {
      // Only work if teacher mode is active (BOTH teachers)
      if (currentTeacherMode) {
        showSidebar();
      }
    });
  }

  if (closeSidebar) {
    closeSidebar.addEventListener('click', hideSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', hideSidebar);
  }

  if (addWeekButton) {
    addWeekButton.addEventListener('click', addWeek);
  }

  if (searchButton) {
    searchButton.addEventListener('click', searchInfo);
  }

  if (addStudentButton) {
    addStudentButton.addEventListener('click', addStudentWithGroup);
  }

  if (saveButton) {
    saveButton.addEventListener('click', saveCurrentWeek);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchInfo();
      }
    });
  }
  
  if (groupInput) {
    groupInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addStudentWithGroup();
      }
    });
  }

  if (deleteModal) {
    deleteModal.addEventListener('click', (e) => {
      if (e.target === deleteModal) hideDeleteModal();
    });
  }

  if (crossGroupModal) {
    crossGroupModal.addEventListener('click', (e) => {
      if (e.target === crossGroupModal) {
        alert("Please complete the cross-group assignment process or remove the student from your table.");
      }
    });
  }

  if (confirmWeekDeleteBtn) {
    confirmWeekDeleteBtn.addEventListener('click', confirmWeekDelete);
  }

  if (cancelWeekDeleteBtn) {
    cancelWeekDeleteBtn.addEventListener('click', hideDeleteWeekModal);
  }

  if (deleteWeekModal) {
    deleteWeekModal.addEventListener('click', (e) => {
      if (e.target === deleteWeekModal) hideDeleteWeekModal();
    });
  }

  // Student event listeners
  if (closeStudentSidebar) {
    closeStudentSidebar.addEventListener('click', hideStudentSidebar);
  }

  if (studentSidebarOverlay) {
    studentSidebarOverlay.addEventListener('click', hideStudentSidebar);
  }

  if (studentHamburgerMenu) {
    studentHamburgerMenu.addEventListener('click', function() {
      if (currentStudent) {
        showStudentSidebar();
      }
    });
  }

// Add this function to handle schedule display
function displayStudentSchedule(groupNumber) {
  let studentScheduleDisplay = document.getElementById('studentScheduleDisplay');
  
  // Create the element if it doesn't exist
  if (!studentScheduleDisplay) {
    studentScheduleDisplay = document.createElement('div');
    studentScheduleDisplay.id = 'studentScheduleDisplay';
    studentScheduleDisplay.className = 'schedule-container';
    document.querySelector('.search-section').appendChild(studentScheduleDisplay);
  }
  
  studentScheduleDisplay.style.display = 'block';
  loadGroupSchedule(groupNumber);
}


  // Start student hamburger animation
  if (studentHamburgerMenu) {
    startStudentHamburgerAnimation();
  }

  // Load saved data from localStorage
  const savedWeeksData = localStorage.getItem('weeksData');
  if (savedWeeksData) {
    weeksData = JSON.parse(savedWeeksData);
  }

  // Start teacher hamburger animation
  startHamburgerAnimation();
    // Initialize both hamburger menus as hidden
  if (hamburgerMenu) {
    hamburgerMenu.style.display = 'none';

    
  }

  // Update the group button event listeners
document.querySelectorAll('.group-btn').forEach(button => {
  button.addEventListener('click', function() {
    const groupNumber = this.getAttribute('data-group');
    displayStudentSchedule(groupNumber);
  });


  if (studentHamburgerMenu) {
    studentHamburgerMenu.style.display = 'none';
  }
    setTimeout(() => {
    initializeAllTimers();
  }, 500);
});

// Walking animation for hamburger menu
function startHamburgerAnimation() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  if (!hamburgerMenu) return;

  let animationId;
  let isAnimating = false;

  hamburgerMenu.addEventListener('mouseenter', function() {
    if (isAnimating) return;
    isAnimating = true;
    animate();
  });

  hamburgerMenu.addEventListener('mouseleave', function() {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    
    const leftLeg = hamburgerMenu.querySelector('.left-leg');
    const rightLeg = hamburgerMenu.querySelector('.right-leg');
    const leftHand = hamburgerMenu.querySelector('.left-hand');
    const rightHand = hamburgerMenu.querySelector('.right-hand');
    const bodyLine = hamburgerMenu.querySelector('.body-line');
    const headLine = hamburgerMenu.querySelector('.head-line');
    
    if (leftLeg) leftLeg.style.transform = 'rotate(0deg)';
    if (rightLeg) rightLeg.style.transform = 'rotate(0deg)';
    if (leftHand) leftHand.style.transform = 'rotate(0deg)';
    if (rightHand) rightHand.style.transform = 'rotate(0deg)';
    if (bodyLine) bodyLine.style.transform = 'translateX(-50%) rotate(0deg)';
    if (headLine) headLine.style.transform = 'translateX(-50%) rotate(0deg)';
  });

  function animate() {
    if (!isAnimating) return;

    const time = Date.now() * 0.005;
    const leftLeg = hamburgerMenu.querySelector('.left-leg');
    const rightLeg = hamburgerMenu.querySelector('.right-leg');
    const leftHand = hamburgerMenu.querySelector('.left-hand');
    const rightHand = hamburgerMenu.querySelector('.right-hand');
    const bodyLine = hamburgerMenu.querySelector('.body-line');
    const headLine = hamburgerMenu.querySelector('.head-line');

    if (leftLeg) leftLeg.style.transform = `rotate(${Math.sin(time) * 25}deg)`;
    if (rightLeg) rightLeg.style.transform = `rotate(${-Math.sin(time) * 25}deg)`;

    if (leftHand) leftHand.style.transform = `rotate(${Math.sin(time + 1) * 8}deg)`;
    if (rightHand) rightHand.style.transform = `rotate(${-Math.sin(time + 1) * 8}deg)`;

    if (bodyLine) bodyLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5) * 2}deg)`;
    if (headLine) headLine.style.transform = `translateX(-50%) rotate(${Math.sin(time * 0.5 + 0.5) * 1.5}deg)`;

    animationId = requestAnimationFrame(animate);
  }
}


function getNextTPOfITDate(groupNumber) {
    const now = new Date();
    const targetDay = 2; // Tuesday
    const targetHour = 12; // 12:30 PM
    const targetMinute = 30;
    
    // Find next Tuesday 12:30 PM
    let nextDate = new Date(now);
    nextDate.setDate(now.getDate() + ((7 + targetDay - now.getDay()) % 7));
    nextDate.setHours(targetHour, targetMinute, 0, 0);
    
    // If we've passed this Tuesday 12:30 PM, go to next Tuesday
    if (nextDate <= now) {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    // Groups 2 & 4: this week, Groups 1 & 3: next week
    if (groupNumber === "1" || groupNumber === "3") {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    return nextDate;
}

function initializeAllTimers() {
    // Clear any existing intervals first
    if (window.timerIntervals) {
        window.timerIntervals.forEach(interval => clearInterval(interval));
    }
    window.timerIntervals = [];
    
    // Initialize Monday TP timer
    if (currentStudent) {
        const mondayTP = getNextLabDateAndType(currentStudent.GRP_TP);
        startSingleSmallTimer('monday-tp-timer', mondayTP.date, mondayTP.displayName);
    }
    
    // Initialize TP Of IT timers for all groups
    for (let groupNum of ["1", "2", "3", "4"]) {
        const tpItDate = getNextTPOfITDate(groupNum);
        startSingleSmallTimer(`tp-it-timer-${groupNum}`, tpItDate, 'TP Of IT', groupNum);
    }
}

function createTPOfITTimerHTML(groupNumber, targetDate) {
    return `
        <div class="tp-it-timer-container">
            <div class="tp-it-timer-header">
                📅 Next TP Of IT (Group ${groupNumber})
            </div>
            <div class="countdown-timer-tp-it" id="tp-it-timer-${groupNumber}">
                <div class="tp-it-time-display">00W:00D:00H:00M:00S</div>
            </div>
        </div>
    `;
}


function startSingleTPOfITTimer(timerId, targetDate) {
    function updateTimer() {
        const now = new Date();
        const timeDiff = targetDate - now;
        
        if (timeDiff <= 0) {
            const groupNumber = timerId.split('-')[3];
            targetDate = getNextTPOfITDate(groupNumber);
            updateTimer();
            return;
        }
        
        const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        const timeDisplay = `${weeks.toString().padStart(2, '0')}W:${days.toString().padStart(2, '0')}D:${hours.toString().padStart(2, '0')}H:${minutes.toString().padStart(2, '0')}M:${seconds.toString().padStart(2, '0')}S`;
        
        const timerElement = document.getElementById(timerId);
        if (timerElement) {
            const displayElement = timerElement.querySelector('.tp-it-time-display');
            if (displayElement) {
                displayElement.textContent = timeDisplay;
                timerElement.classList.toggle('warning', days === 0 && hours < 24);
            }
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Enhanced function to get next lab date with type
function getNextLabDateAndType(grpTP) {
    const now = new Date();
    const targetDay = 1; // Monday
    const targetHour = 14; // 2:30 PM
    const targetMinute = 30;
    
    let nextDate = new Date(now);
    nextDate.setDate(now.getDate() + ((7 + targetDay - now.getDay()) % 7));
    nextDate.setHours(targetHour, targetMinute, 0, 0);
    
    if (nextDate <= now) {
        nextDate.setDate(nextDate.getDate() + 7);
    }
    
    // Determine lab type based ONLY on GRP_TP
    let labType;
    if (["A", "B", "C"].includes(grpTP)) {
        labType = 'physics';
    } else {
        labType = 'chemistry';
    }
    
    return {
        date: nextDate,
        type: labType,
        displayName: labType === 'physics' ? 'Physics Lab' : 'Chemistry Lab'
    };
}

// === Small TP Timers for Dynamic Monday TP ===

function initializeScheduleTPTimers(groupNumber) {
    const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
    const nextLab = getNextLabDateAndType(tpGroup);
    const tpItDate = getNextTPOfITDate(groupNumber);
    
    return {
        mondayTP: createSmallTimerHTML('monday-tp', nextLab.date, groupNumber, nextLab.displayName),
        tpIt: createSmallTimerHTML('tp-it', tpItDate, groupNumber, 'TP Of IT')
    };
}

function createSmallTimerHTML(type, targetDate, groupNumber, displayName) {
    const timerId = `small-${type}-timer-${groupNumber}`;
    const icons = {
        'monday-tp': '🔬',
        'tp-it': '💻'
    };
    
    return `
        <div class="small-tp-timer small-${type}-timer" id="${timerId}">
            <div class="small-timer-label">${icons[type]} Next ${displayName}</div>
            <div class="small-timer-display">--:--:--</div>
        </div>
    `;
}

function startSmallTPTimers(groupNumber) {
    const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
    const nextLab = getNextLabDateAndType(tpGroup);
    const tpItDate = getNextTPOfITDate(groupNumber);
    
    startSingleSmallTimer(`small-monday-tp-timer-${groupNumber}`, nextLab.date, nextLab.displayName, groupNumber);
    startSingleSmallTimer(`small-tp-it-timer-${groupNumber}`, tpItDate, 'TP Of IT', groupNumber);
}

function startSingleSmallTimer(timerId, targetDate, displayName, groupNumber) {
    function updateTimer() {
        const now = new Date();
        const timeDiff = targetDate - now;
        
        if (timeDiff <= 0) {
            const parts = timerId.split('-');
            const type = parts[1];
            
            if (type === 'monday-tp') {
                const tpGroup = currentStudent ? currentStudent.GRP_TP : "A";
                const nextLab = getNextLabDateAndType(tpGroup);
                targetDate = nextLab.date;
                displayName = nextLab.displayName;
            } else if (type === 'tp-it') {
                targetDate = getNextTPOfITDate(groupNumber);
            }
            updateTimer();
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        const timeDisplay = `${days}d ${hours}h ${minutes}m`;
        
        const timerElement = document.getElementById(timerId);
        if (timerElement) {
            const displayElement = timerElement.querySelector('.small-timer-display');
            if (displayElement) {
                displayElement.textContent = timeDisplay;
                timerElement.classList.toggle('warning', days === 0 && hours < 24);
            }
        }
    }

    updateTimer();
    const interval = setInterval(updateTimer, 60000);
    if (!window.timerIntervals) window.timerIntervals = [];
    window.timerIntervals.push(interval);
}
})


