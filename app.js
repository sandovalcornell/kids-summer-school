// Shared helpers for Summer Learning Lab

const SUBJECT_INFO = {
  Math: { emoji: '⚡', class: 'math', type: 'Electric-type' },
  ELA: { emoji: '💧', class: 'ela', type: 'Water-type' },
  Science: { emoji: '🌿', class: 'science', type: 'Grass-type' },
};

function getStudentKey() {
  const params = new URLSearchParams(window.location.search);
  const who = (params.get('who') || '').toLowerCase();
  return who === 'luca' || who === 'sienna' ? who : null;
}

function getLessons(who) {
  if (who === 'luca') return window.LUCA_LESSONS || [];
  if (who === 'sienna') return window.SIENNA_LESSONS || [];
  return [];
}

function progressKey(who) {
  return `sll_progress_${who}`;
}

function loadProgress(who) {
  try {
    const raw = localStorage.getItem(progressKey(who));
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(who, progress) {
  localStorage.setItem(progressKey(who), JSON.stringify(progress));
}

function markDayComplete(who, day, score, total) {
  const progress = loadProgress(who);
  progress[day] = { done: true, score, total, completedAt: new Date().toISOString() };
  saveProgress(who, progress);
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function computeStreak(who) {
  const lessons = getLessons(who);
  const progress = loadProgress(who);
  let lastDoneIndex = -1;
  for (let i = lessons.length - 1; i >= 0; i--) {
    if (progress[lessons[i].day] && progress[lessons[i].day].done) {
      lastDoneIndex = i;
      break;
    }
  }
  if (lastDoneIndex === -1) return 0;
  let streak = 0;
  for (let i = lastDoneIndex; i >= 0; i--) {
    if (progress[lessons[i].day] && progress[lessons[i].day].done) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

function displayName(who) {
  return who === 'luca' ? 'LUCA' : 'SIENNA';
}
