const today = new Date().toLocaleString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
});
const year = new Date().toLocaleString('en-US', {year:'numeric'});

const day = new Date().toLocaleString('en-US', {weekday: 'long'})

module.exports = {today, year, day};
