// Memory data storage
let memories = [
    {
      id: 1,
      title: "First PC Gaming Experience",
      description: "I remember the first PC/Flash game that I've encountered which was a game called 'Avata Star Sue' with story episodes. I had fun playing those series of games, such as baking, finding hidden items, creating potions based on recipes, and many other concepts.",
      image: "https://i.namu.wiki/i/w-CC44y2koeY-oQk6xEnuIoufM9PM387CamPZYsRx0zEwrzzbMJXtCfqQRDAk0G-B85JoKfOKb07aRWO-sRlaA.webp",
      age: 8,
      year: 2010,
      date: "Summer 2010",
      category: "Game",
      achievements: ["First Gaming Experience", "Dream Begins"]
    },
    {
      id: 2,
      title: "High School Enrollment",
      description: "Started high school life with new friends. Joined the computer club and began to develop an interest in programming.",
      image: "https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 16,
      year: 2016,
      date: "March 2016",
      category: "Education",
      achievements: ["New Beginning", "Club Membership"]
    },
    {
      id: 3,
      title: "First Game Development Project",
      description: "Created my first 2D platformer game while learning Unity with friends. It was full of bugs, but I felt the joy of completion.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 18,
      year: 2018,
      date: "December 2018",
      category: "Project",
      achievements: ["First Game Completed", "Teamwork", "Unity Mastered"]
    },
    {
      id: 4,
      title: "Game Design University Enrollment",
      description: "Enrolled in the game design program of my dreams. Improved my skills through professional game development education.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 19,
      year: 2019,
      date: "March 2019",
      category: "Education",
      achievements: ["Game Design Major", "New Challenge"]
    },
    {
      id: 5,
      title: "Game Jam Winner",
      description: "Won first place in a 48-hour game jam with my team by creating 'Pixel Adventure'. My first game development award.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 21,
      year: 2021,
      date: "November 2021",
      category: "Project",
      achievements: ["Game Jam Winner", "Rapid Development", "Creativity"]
    },
    {
      id: 6,
      title: "Indie Game Studio Intern",
      description: "First internship experience at a small indie game studio. Learned the real game development process and collaborated with professional developers.",
      image: "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 22,
      year: 2022,
      date: "Summer 2022",
      category: "Career",
      achievements: ["First Internship", "Industry Experience", "Game Launch Contribution"]
    },
    {
      id: 7,
      title: "Graduation Project Completed",
      description: "Completed my graduation project 'Dream Quest' containing four years of learning. Released it on Steam and received positive reviews.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 23,
      year: 2023,
      date: "February 2023",
      category: "Project",
      achievements: ["Graduation Work Completed", "Steam Release", "Positive Reviews"]
    },
    {
      id: 8,
      title: "Present - Growing as a Game Developer",
      description: "Steadily improving my skills through various projects. My ultimate goal is to become a game designer at Riot Games!",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 25,
      year: 2025,
      date: "Present 2025",
      category: "Career",
      achievements: ["Continuous Growth", "Diverse Project Experience"]
    }
  ];
  
  let nextId = memories.length + 1;
  
  // Helper function to parse date for sorting
  function parseMemoryDate(memory) {
    // Create a sortable date from year and date string
    // If there's a specific month/date in the date field, try to parse it
    const monthMap = {
      'january': 1, 'february': 2, 'march': 3, 'april': 4,
      'may': 5, 'june': 6, 'july': 7, 'august': 8,
      'september': 9, 'october': 10, 'november': 11, 'december': 12,
      'summer': 7, 'winter': 1, 'spring': 4, 'fall': 10, 'autumn': 10,
      'present': 12
    };
    
    let month = 6; // Default to June if no month specified
    let day = 15; // Default to 15th if no day specified
    
    if (memory.date) {
      const dateLower = memory.date.toLowerCase();
      // Try to find month name in date string
      for (const [monthName, monthNum] of Object.entries(monthMap)) {
        if (dateLower.includes(monthName)) {
          month = monthNum;
          break;
        }
      }
    }
    
    // Create a comparable date: YYYYMMDD format as number
    return memory.year * 10000 + month * 100 + day;
  }
  
  // DOM elements
  const memoriesGrid = document.getElementById('memories-grid');
  const addMemoryBtn = document.getElementById('add-memory-btn');
  const addMemoryModal = document.getElementById('add-memory-modal');
  const closeAddModalBtn = document.getElementById('close-add-modal');
  const cancelAddBtn = document.getElementById('cancel-add-btn');
  const addMemoryForm = document.getElementById('add-memory-form');
  const searchImageBtn = document.getElementById('search-image-btn');
  
  const memoryModal = document.getElementById('memory-modal');
  const closeModalBtn = document.getElementById('close-modal');
  
  // 헤더 업데이트
  function updateHeader() {
    const maxAge = Math.max(...memories.map(m => m.age), 25);
    const targetAge = 40;
    const progress = (maxAge / targetAge) * 100;
    
    document.getElementById('current-level').textContent = maxAge;
    document.getElementById('progress-text').textContent = maxAge;
    document.querySelector('.progress-bar').style.width = progress + '%';
  }
  
  // 메모리 카드 생성
  function createMemoryCard(memory) {
    const card = document.createElement('div');
    card.className = 'pixel-card memory-card cursor-pointer transition-all duration-200';
    card.onclick = () => showMemoryDetail(memory);
    
    card.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${memory.image}" alt="${memory.title}" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1624357676666-4cca3b657627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080'">
        <div class="absolute top-2 left-2">
          <div class="bg-green-500 pixel-border border-green-700 px-2 py-1">
            <span class="pixel-font text-xs text-white">LV.${memory.age}</span>
          </div>
        </div>
        <div class="absolute top-2 right-2">
          <div class="bg-yellow-400 pixel-border border-yellow-600 px-2 py-1">
            <span class="pixel-font text-xs text-black">${memory.year}</span>
          </div>
        </div>
      </div>
      
      <div class="p-4 bg-gradient-to-b from-blue-50 to-purple-50">
        <h3 class="funnel-font-bold text-xs text-gray-800 mb-3 memory-title leading-relaxed">
          ${memory.title}
        </h3>
        <div class="flex items-center justify-between">
          <div class="bg-cyan-100 pixel-border border-cyan-300 px-2 py-1">
            <span class="pixel-font text-xs text-cyan-800">${memory.category}</span>
          </div>
          <div class="text-xs text-gray-600 funnel-font">
            AGE: ${memory.age}
          </div>
        </div>
      </div>
    `;
    
    return card;
  }
  
  // Render memory grid
  function renderMemories() {
    memoriesGrid.innerHTML = '';
    
    // Sort by date (chronologically)
    const sortedMemories = [...memories].sort((a, b) => {
      const dateA = parseMemoryDate(a);
      const dateB = parseMemoryDate(b);
      return dateA - dateB;
    });
    
    sortedMemories.forEach(memory => {
      const card = createMemoryCard(memory);
      memoriesGrid.appendChild(card);
    });
  }
  
  // Show memory detail
  function showMemoryDetail(memory) {
    document.getElementById('modal-title').textContent = memory.title;
    document.getElementById('modal-subtitle').textContent = `Level ${memory.age} - ${memory.category}`;
    document.getElementById('modal-image').src = memory.image;
    document.getElementById('modal-level').textContent = `LV.${memory.age}`;
    document.getElementById('modal-date').textContent = memory.date;
    document.getElementById('modal-age').textContent = memory.age + ' years old';
    document.getElementById('modal-category').textContent = memory.category;
    document.getElementById('modal-description').textContent = memory.description;
    
    // Display achievements
    const achievementsContainer = document.getElementById('modal-achievements');
    const achievementsList = document.getElementById('achievements-list');
    
    if (memory.achievements && memory.achievements.length > 0) {
      achievementsContainer.classList.remove('hidden');
      achievementsList.innerHTML = '';
      memory.achievements.forEach(achievement => {
        const badge = document.createElement('div');
        badge.className = 'bg-yellow-400 pixel-border border-yellow-600 px-2 py-1 achievement-badge';
        badge.innerHTML = `<span class="pixel-font text-xs text-yellow-900">${achievement}</span>`;
        achievementsList.appendChild(badge);
      });
    } else {
      achievementsContainer.classList.add('hidden');
    }
    
    memoryModal.classList.remove('hidden');
  }
  
  // Close modal
  function closeMemoryModal() {
    memoryModal.classList.add('hidden');
  }
  
  // Open add memory modal
  function openAddMemoryModal() {
    addMemoryModal.classList.remove('hidden');
  }
  
  // Close add memory modal
  function closeAddMemoryModal() {
    addMemoryModal.classList.add('hidden');
    addMemoryForm.reset();
  }
  
  // Image search
  async function searchImage() {
    const title = document.getElementById('memory-title').value;
    const category = document.getElementById('memory-category').value;
    
    if (!title && !category) {
      alert('Please enter a title or category first!');
      return;
    }
    
    const imageCategories = {
      "Game": [
        "https://images.unsplash.com/photo-1624357676666-4cca3b657627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ],
      "Education": [
        "https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ],
      "Project": [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ],
      "Career": [
        "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ],
      "Hobby": [
        "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ],
      "Travel": [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
      ]
    };
    
    const categoryImages = imageCategories[category] || imageCategories["Game"];
    const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
    
    document.getElementById('memory-image').value = randomImage;
  }
  
  // Add memory
  function addMemory(e) {
    e.preventDefault();
    
    const title = document.getElementById('memory-title').value;
    const description = document.getElementById('memory-description').value;
    const image = document.getElementById('memory-image').value || 'https://images.unsplash.com/photo-1624357676666-4cca3b657627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080';
    const age = parseInt(document.getElementById('memory-age').value);
    const year = parseInt(document.getElementById('memory-year').value);
    const date = document.getElementById('memory-date').value || `${year}`;
    const category = document.getElementById('memory-category').value || 'Other';
    const achievementsInput = document.getElementById('memory-achievements').value;
    
    const achievements = achievementsInput 
      ? achievementsInput.split(',').map(a => a.trim()).filter(a => a)
      : undefined;
    
    const newMemory = {
      id: nextId++,
      title,
      description,
      image,
      age,
      year,
      date,
      category,
      achievements
    };
    
    memories.push(newMemory);
    renderMemories();
    updateHeader();
    closeAddMemoryModal();
  }
  
  // Event listeners
  addMemoryBtn.addEventListener('click', openAddMemoryModal);
  closeAddModalBtn.addEventListener('click', closeAddMemoryModal);
  cancelAddBtn.addEventListener('click', closeAddMemoryModal);
  closeModalBtn.addEventListener('click', closeMemoryModal);
  addMemoryForm.addEventListener('submit', addMemory);
  searchImageBtn.addEventListener('click', searchImage);
  
  // Close modal on overlay click
  memoryModal.addEventListener('click', (e) => {
    if (e.target === memoryModal) {
      closeMemoryModal();
    }
  });
  
  addMemoryModal.addEventListener('click', (e) => {
    if (e.target === addMemoryModal) {
      closeAddMemoryModal();
    }
  });
  
  // Initial rendering
  renderMemories();
  updateHeader();
  
  // Update time (optional)
  function updateTime() {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const dateElements = document.querySelectorAll('.pixel-font.text-xs');
    // Time update is optional, so commented out
    // dateElements[1].textContent = timeStr;
  }
  
  setInterval(updateTime, 1000);
  
