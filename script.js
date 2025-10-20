// Memory data storage
let memories = [
    {
      id: 1,
      title: "First Gaming Experience",
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
      description: "Enrolled to a foreign language high school in South Korea and started a unique life with new friends. Majored in Japanese and participated in the School festival, athletic team, music contest, and more. ",
      image: "https://blog.kakaocdn.net/dna/uNhIn/btsE6B8tghZ/AAAAAAAAAAAAAAAAAAAAACk86AemxMKAI-IWlIkLm_-ntsAmrNrmCXgCU4XJu8jI/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1761922799&allow_ip=&allow_referer=&signature=oMEDXmAvkWT9WLABzIi1HC2RcKE%3D",
      age: 17,
      year: 2019,
      date: "March 2019",
      category: "Education",
      achievements: ["New Beginning", "Unforgettable memories"]
    },
    {
      id: 3,
      title: "Beginning as a Computer Engineering Student",
      description: "First time writing C++ codes and creating simple mechanisms. I felt proud of myself when I saw the successful outcome for writing several lines of codes that took hours and days.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_GeIYAmi0Zm2LcIWuBK9V6pBLXZLRglLoA&s",
      age: 20,
      year: 2022,
      date: "August 2022",
      category: "Education",
      achievements: ["C++ Programming"]
    },
    {
      id: 4,
      title: "2nd Beginning as a Utah Games student",
      description: "Enrolled in the game design program of my dreams. Improved my skills through professional game development education.",
      image: "https://i.ytimg.com/vi/KPINsP4Ei9g/maxresdefault.jpg",
      age: 22,
      year: 2024,
      date: "August 2024",
      category: "Education",
      achievements: ["Games Major", "2nd Beginning chapter"]
    },
    {
      id: 5,
      title: "First Game Project",
      description: "First time creating a psychological simulation game with my teammates. While the processes were difficult with numerous conflicts, nevertheless, I was happy with the outcome my team and I made at the end of the semester. Also, it was the first game project that was laucnhed itch.io and STEAM, which was very meaningful to me.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      age: 23,
      year: 2025,
      date: "August 2025",
      category: "Project",
      achievements: ["First Game Project", "Unreal Engine", "Maya Modeling", "Project Manager"]
    },
    {
      id: 6,
      title: "Transition from Asia Campus to SLC",
      description: "First time studying abroad apart from my family. I was nervous and also excited to study with talented students and learn from professors who are experts in the current field.",
      image: "https://www.skiutah.com/files/subblob/blog/images.listing/1461089874",
      age: 24,
      year: 2026,
      date: "January 2026",
      category: "Career",
      achievements: ["First time studying abroad", "Utah life"]
    },
    {
      id: 7,
      title: "Riot Games University Program Intern",
      description: "First internship experience at my dream company. Experiences at Riot Games will be unforgettable for my entire life. The work environment, tasks, food, everything that could be mentioned were perfect and beyond my expectation. It made me much clearer to work as a senior manager in the upcoming years.",
      image: "https://www.riotgames.com/darkroom/600/129c5935443af674f143d1f29c71e458:e5afacf2a05e77ea32b3f56a8d589b98/up-posting-day-article-headers-vol-1.jpg",
      age: 25,
      year: 2027,
      date: "Summer 2027",
      category: "Career",
      achievements: ["First Internship", "Industry Experience", "Game Launch Contribution"]
    },
    {
      id: 8,
      title: "Capstone Graduation Project Completed",
      description: "Completed my Capstone graduation project containing four years of learning. Released it on Steam and received positive reviews. I am so happy and excited to see people enjoying the game that I made for a year.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmOJRdth6XZsVsggiQgREutDrrTc8f8hjf0S6P5zJTNai8TxlrnUo6nLm2q004qW9eBQ93g",
      age: 25,
      year: 2027,
      date: "May 2027",
      category: "Project",
      achievements: ["Graduation Work Completed", "Steam Release", "Positive Reviews"]
    },
    {
      id: 9,
      title: "First day as a Game Art Designer at Epic Games",
      description: "Steadily improving my skills through various projects. My ultimate goal is to become a game designer at Riot Games! However, working at Epic Games will also be a strong foundation in my career path and I hardly doubt Epic Games will also be a great workplace for people in the gaming industry. It does feel weird working at Epic Games as I am more familiar with Unreal Engine program more than their games LOL :)",
      image: "https://cdn2.unrealengine.com/epic-games-social-share-1200x675-7670432fc58a.png",
      age: 26,
      year: 2028,
      date: "January 2028",
      category: "Career",
      achievements: ["Continuous Growth", "Diverse Project Experience"]
    },
    {
      id: 10,
      title: "University of Utah Games Masters Program",
      description: "Finally graduating from Games Master program! I feel proud of myself for gong through all kinds of challenges and hardships while doing the Masters program and working in a game company at the same time.",
      image: "https://pbs.twimg.com/profile_images/1674876663618998275/SWdsyhwz_400x400.jpg",
      age: 27,
      year: 2029,
      date: "May 2029",
      category: "Education",
      achievements: ["Master Graduate", "Expert", "Professional"]
    },
    {
      id: 11,
      title: "Married to my lovely husband",
      description: "Marrying the love of my life in Korea, where I was born and grew my whole life. Now, I am starting to have my own family and looking forward to go on a new journey.",
      image: "https://www.dottyaboutpaper.co.uk/cdn/shop/articles/couple-holding-wedding-bouquet-scaled_1024x1024.jpg?v=1694339675",
      age: 31,
      year: 2033,
      date: "May 2033",
      category: "Relationship",
      achievements: ["Married Woman", "Starting my own family", "New happy phase"]
    },
    {
      id: 12,
      title: "Scouted by Krafton",
      description: "Still surprising that I got a scout suggestion from Krafton, one of the most biggest gaming company in the world. As a person who loved to play mobile PUBG, it feels different to take a look at the behind scenes of the game that I used to play.",
      image: "https://media.licdn.com/dms/image/v2/C561BAQFErsALR1Agjg/company-background_10000/company-background_10000/0/1620616415905/krafton_inc_cover?e=2147483647&v=beta&t=8hCLpWzsSQjYcQfarSYvwWIiwwJ1bLtlt4CnXNwABjo",
      age: 34,
      year: 2036,
      date: "March 2036",
      category: "Career",
      achievements: ["First job in Korea", "Scout"]
    },
    {
      id: 13,
      title: "Concern as a mother and as a career woman",
      description: "As a mom of two children, it is always difficult to find a balance between work and life. I am physically and mentally tired of managning both of them and concerned about whether or not I should quit my job. I still have a goal to achieve: working as a Skin Designer at Riot Games Valorant team.",
      image: "https://www.riotgames.com/darkroom/1440/8136f3cda272877a691918dada74750a:d2bc5a8aa467bb5a5d077d9578b6f0b7/allgames-card-v6-final-lesstext-1920.jpg",
      age: 34,
      year: 2036,
      date: "March 2036",
      category: "Other",
      achievements: ["Career VS Family", "Passion towards Riot Games "]
    },
    {
      id: 14,
      title: "Finally getting in to Riot Games",
      description: "After years and years of challenging, I have finally succeeded in getting a job at Riot Games. I have been positioned to the TFT team, which is still great. I am excited to see what I will be working on. I hope people like me !!",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/db/12333_Olympic_Boulevard.jpg",
      age: 37,
      year: 2039,
      date: "July 2039",
      category: "Career",
      achievements: ["Slow and Steady", "TFT team", "Team Riot"]
    },
    {
      id: 15,
      title: "Dream come true",
      description: "Dream always come true. Luckily, I was transferred to the Valorant team as the project mananger who is in control of the overall flow of the project and the progression pace. I am more than happy and looking forward to the game.",
      image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c6c50b680c5e1846a9c77f86d5aa357d46584ffe-1920x1080.png?auto=format&fit=fill&q=80&w=1082",
      age: 40,
      year: 2042,
      date: "October 2042",
      category: "Career",
      achievements: ["Dream come true", "Valorant", "Still Team Riot"]
    },
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
    
    let month = 4; // Default to June if no month specified
    let day = 30; // Default to 15th if no day specified
    
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
    const maxAge = Math.max(...memories.map(m => m.age), 40);
    const targetAge = 85;
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
        "https://i.namu.wiki/i/w-CC44y2koeY-oQk6xEnuIoufM9PM387CamPZYsRx0zEwrzzbMJXtCfqQRDAk0G-B85JoKfOKb07aRWO-sRlaA.webp",
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
  
