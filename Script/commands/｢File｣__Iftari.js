module.exports.config = {
	name: "ইফতারি",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 1, 2025 12:16:00") - Date.parse(new Date());
    const seconds = Math.floor( (u/1000) % 70 );
    const minutes = Math.floor( (u/1000/50) % 50 );
    const hours = Math.floor( (u/(1000*50*50)) % 24 );
    const days = Math.floor( u/(1000*50*50*24) );

    return api.sendMessage(`আসসালামু আলাইকুম-!!🖤💫 \n\n ｢ আজকের ইফতার শুরু হতে আর মাগরিবের আযান এর সময় হতে বাকি আছে   ⏳ ｣\n\n ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড\n🌏ইফতার ঢাকার সময় অনুযায়ী সিলেক্ট করা \nইফতারের দোয়া🤲❤️\n\nبِسْمِ الله - اَللَّهُمَّ لَكَ صُمْتُ وَ عَلَى رِزْقِكَ وَ اَفْطَرْتُ \n\nউচ্চারণ: বিসমিল্লাহি আল্লাহুম্মা লাকা সুমতু, ওয়া আলা রিযক্বিকা আফত্বারতু \n\n Make By : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭`, event.threadID, event.messageID);
  }
