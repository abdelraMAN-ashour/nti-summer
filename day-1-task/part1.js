function getday(d){
    const days=['sun','mon','tue','wed','thr','fri','sat'];
    const date =new Date(d);
    return days[date.getDay()];
    }
console.log(getday('2025-6-30')); 