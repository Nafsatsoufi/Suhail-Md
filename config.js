const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jamesmakani5@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254758732775";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_00_03_09_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib050VUNkVHQybnkxQy9lcXB6bHhxM2V6TXRVMXhseVNQRkRuNWdWb3hXOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjlLMWVhWWRHQUdHcWMwckhncEtQcmZ5MXpONytoVGtGZlQwVzArQnRIaVk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0RIaVVKdXZLTUVNOS9VTXJJQWlMcnQwTlBPcGUzWm9QYlN1dm40MDVFND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjB4eTU3S2MvU3FBT25tZnFtZDRGdEEvZmdVWjc1aGllWDQ1c3hQT1JUWEU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUxMU3IzRGpjTlExb05oSFFrVmduUDIyUFpYS0hMZEZ4TktpT2V3eHRtaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIllCSmE5S0taZGR4WVlzNzBqRHFzKzUvZWNIeDNISDFvR0VrRkE4ejVhUlE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5Qm5Pb2JMNENMZWFUcVFBaldsdUF4bjk1MmY4czNlaEdKVzl4YXJzRmxJPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNDZPV1phZjhoNzYrWmJYbHoydHZZQ3BaS2x0dlA0RDRwVHVxbjZOTVZCVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVdmw2b3FkMEZVbHRLYUZWd3dSeG43WVQyVUs4NDB0TXg2WVBZdGdid0llV2h6cFpodGFMSWhsR1RpSWpwM0trWWhhTGdpdkZvVGV0dWtNUm1rSmxBdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTQ0LFwiYWR2U2VjcmV0S2V5XCI6XCIyMEdKczZZVW9ReW1oZ3ZvaWFVS2tjZlJRbmZVa1RHVEdxWm9VdzBsQkRVPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0NzU4NzMyNzc1QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkNDRDIzNzQ4QzE0OTUyNTJBMEE2RjIxM0Y4NUQxMjlGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDk5Njc2MzZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJnUy1GeEJqUVFzLTVqRGxJbzlEM2xBXCIsXCJwaG9uZUlkXCI6XCJjNjcxMjc4OC05NjI0LTQzZDAtODRhZi1mN2VmODdiYzU3MDRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhoaFNEb3BMMzdtTE1oTFVQejA4RERHZndXMD1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTVR6Z0p1NTRRT2p0Sm5rSzRoUng5N3VFT2tRPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJcXd6UHdCRUk2U3NLOEdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiQjgxb0szOVloVjlsZ1hRUWEvWjgrZG1nUUVnakZ3SHRDc1lIOU1zUUNHND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkRONGxDY1A4UTlQc0g0aFk4dWpFZE42VXdrV2s5eHk1QVZ5Y2ZJbUVTM1ltai9kcWFscGkyNVV4M0xrZnBrdWVXa1dScjlPU0FFVEZnR1hNeUVGVUNnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiQm9IY1Q3elF1SnhYM3RxUmR6SmZCRG92d1RqYnBBdWtxU1JLaC9HR1RwZ24zZ3l4SzJJNDY2ejNDNVNuSGpvY0kxa2VmekFIZkpBOFJtY2RvMDhaQkE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDc1ODczMjc3NTo1NUBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTGF1cmFcIixcImxpZFwiOlwiNzc3MzA2ODcyNTg2NTc6NTVAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzU4NzMyNzc1OjU1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlFmTmFDdC9XSVZmWllGMEVHdjJmUG5ab0VCSUl4Y0I3UXJHQi9UTEVBaHVcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA5OTY3NjM0LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU9qL1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9qKy5qc29uIjogIntcImtleURhdGFcIjpcInc1Q1FBYUIydzR0bk1JOTBURnVDbjcwQStoeS9ZNFdBUGVyZ2J1Vm5lNjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA3OTkxMzUyMzU0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2owLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3NGSXFYVUJjTzJhSVBLVk1HOTNWZFBQY1ArWWhBOGt6VmhTT3RsV0NZOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MjgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3b1hxaWxOQzd2U0lwMXRPQURpK0lMVXhYNGZkODl1VURqTHRIRUw5alZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYyOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiMmlkeFVZRTliZUx1d2FYN01kVk5SU2YyWTl4cTBJS3NuRkhXbmg5c1RvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYyOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2ozLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2UrM2RVbUJ4Mi9XNWlPdWIwdThyT1hhMktNMFM2RGppOEppN2xXMW4rVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MjgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc5Nzc2MzM5ODFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2cWduZXJ1SmdnWVkvcUEzVHBNL0dTNDB3d3dhMmVoK2hLL2pjZlN6c01JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzk3NzkyNjU2NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9qNS5qc29uIjogIntcImtleURhdGFcIjpcIkdDQVNSa1Fua1RuSHZQc2t2U3dYakFIbndLT29WNTRxYkNjQmNiOE5PbUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNYit5T2h0aUVjdW5oOW9hdGhYdFVGd3FJUVpIVjIyd3VRamh0cVliMHZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzMyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmcUs3VkgzdXRZTkRXdEdvR2lBd3lYbU5HZVNjZ0JpeFExTVVxbDB2Ty9zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzMyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2o4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUnVveXB1ZU1zYVl1UUNoTFpqOXhRdUFBQXNaT3dpcXFtS0NjR3cvVXoyaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MzMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc5ODQ5ODEwOThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPajkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCRmZVUml1QWdpOGpERmg0MzNxOFVaRDlaNWRydlJ0cUlxellteEM5Rm5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2pfXy5qc29uIjogIntcImtleURhdGFcIjpcImZMcEZQOGRjTDhrWkI3MVJPbEkvUmNNUFkyZlJZSC9xdTB5RWdlVHY0Kzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPanouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2NGhJTy9LN1NmYmp0ZXFiMFdFajZ2QVdrdFJ6bUZhaHBOMHI5SHM5UENFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmVpMWY1dXpSMU5lL1JRYk9oOG9JakwzZG8zbTN2NVFXakZTRFJmWnY5QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc5OTQ1Mzg2MDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjYjZlUHRubWxrSnRWMXZSalk0aVNDbTZ3SGpaL1ZiMTBwSTJvbGVydXBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNzk5NDU5ODA2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rQy5qc29uIjogIntcImtleURhdGFcIjpcImgrZkVhWUV3NitZOC9vZG9hRmlBTnJkUGpuc20rOGlTWGJoWWtIcVhOWm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5TUtELzA2QkhjWE5tUGtEUWJCZUtSY0txQ0tmdWlKY1V5Q0J2Mzhta3dNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzNyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rRS5qc29uIjogIntcImtleURhdGFcIjpcIlVzVUtjNW9ncWM1aFZyUVlsUkNDRy93TXZlRlNyNHVyNGt2dHc1MWlIaW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rRi5qc29uIjogIntcImtleURhdGFcIjpcIk1uRXk0cFZ4bVgzaHMxVy9XZDZ4eStwYVR1ejI4QlQ2OU9LRnJINnNycE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJMWc4UHl4ODN3VllTSFdUSVZtUjF2dlpNSjdiSVpOKzlMS0t4OUYyYlc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzNyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwODAwMTU2MTk3NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rSC5qc29uIjogIntcImtleURhdGFcIjpcImRHMW9ZSVMyL2swd2dBNnE3S1c3RDNMdXpQK3ZVV3FjVjN3cWphRzhsRWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCWTloVmZjM295ZEpiZnRXNDZNamZCc1IreGJBUDNQak1zbGtlTHF3Vm9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rSi5qc29uIjogIntcImtleURhdGFcIjpcIlo2R2I0MkQwblZ4UzlsMzlQaXZpOXFQVkNrTzk1eC96eVJhbHk3SUE4bm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rSy5qc29uIjogIntcImtleURhdGFcIjpcInIxRkZpVmd1NStyRDhEcjFSMGhlb3dGYkwxcndySFRXUDY4dUhoQk9oZm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgwOTczMTY4OTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVck9JeS9LbVZ0RjdtNWhjeDUxRDVsQ1BtN09wZjZmQVlWa3VtZlJMaTAwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDOHMrVEN6ak5DODBuVkZvVmdDWUtDNlhJTmg3QWc2cWhwN0VlbExtT1E0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVVNqLytqTmFMaWVEWGtkd0E0MnNqam9NZEowQUo1YVhQQXZLL0YrczFUbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MzgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsNyw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg3NjkxNTcyNzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5UjlhMVpyRUJSelc1RHFmQmZpajVEejBkRFJWS3FRZDJSWmtGTEtHNENvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rUi5qc29uIjogIntcImtleURhdGFcIjpcIjQ3cFVXTUhEZVN3OFcxVjl3OHowampNc3AyMmFDME9KVHpoS3hRN3dna2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw1LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rUy5qc29uIjogIntcImtleURhdGFcIjpcIjIzRUIwTVUyZE41QmVjZ0FzQ3FZcXU4NGhBU21BL1hYQ3lWQTZrTHBCSEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOSnRSRWRpWlpDd2VNZ2tPTEExQVc0eGo0V2E1dlZjbGhSSjZyU2RMQUdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTAyNzE1NTcxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rVS5qc29uIjogIntcImtleURhdGFcIjpcInh1OVNROWw4bGpxQkRJeUhkVi9nNUJvMFA0aEpTNWl0SnpCaDBqUThvOEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDkwMjcyODQzNjFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3VVd2TjdEazU0b1pUamJVVFFSUEgxVnZrVDlsL00rS1dwWmxMQTNNdjBNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWU1OY3JPWFhONG1CandNZFdwUjRFM0ZvTm12OVNhYVcvZFh4a1haNlNxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2MzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDkxMDM2NzQ3MTRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPa1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnOVNudkMrYituRDVvaVZXU04ycm9nVlY1Z3FJQWtrRDh5NUtLU0tSTEc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzY0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA5MTAzNzM3NzAyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2taLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWlWUG1NbzBTc3lyYkdLVDR4WWhoK2RuOUxSaHZLT0lienBiQ1hvYkl1MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzA5MTE5MzEwMDI4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSHgzWlFsVnZDdDAvbjJzY1lIN2dpUS9IWjh0WnFmYzRldlY4NXZkUUlxcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzA5NDUwNzE5NTU2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tjLmpzb24iOiAie1wia2V5RGF0YVwiOlwielNwTG95RVFaNzYyUzZZeGZhUVQ2c2pRenZscFBVOEpQNDNNMmhXSEwwZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWGFlU1EwNTM4L2hxbzRNcnI0VURiekpMcmV5K1VoUEVEN3FpdEZ4cHUvVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9rZS5qc29uIjogIntcImtleURhdGFcIjpcIkdxbG5LcUZlU3ZmWTU1ZmNGWUFHS0JjY2tuSDhFS1NYRmU2a2hIWGI2VkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjQxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzA5OTY3NTM1ODc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2tmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ1B5aDJtV1hjRFgrRU41a3VyMVhMa2Fib2VlampSdkRoNGJBejVETWRtbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTk2NzU1NTIwMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ3NBQU9rTC5qc29uIjogIntcImtleURhdGFcIjpcIkNlTkU0WEtma0hvTWpDTWZnVzh3UnFxamYwTDR1VU9SbFRTbzVHZFBQVm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTI5NzMzNjM4LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDQzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0NDUyNjc0MDRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUNzQUFPa1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1dDB1R21NM2lRVHFyQXdvWG1ndFF6c29BMkp0bUNDZFovUmViU2N4YXowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzYzOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNyw4LDQzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg5NjY2Nzk5NDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQURRQUFPa1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlSUIwNUVaSTAvUUZ2TzNoeitqMHFRWEhWSVFKNkllQ1Y4Q21UYWRRYlI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyOTczMzY0MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1Ml19LFwidGltZXN0YW1wXCI6XCIxNzA5MTE1NDY1MjcyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFEUUFBT2thLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmV5OGZ4TXhpZFNWUHFMZUVoSzNUZTdzZExWdnBWSWs3ajlWQnNJa05iRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mjk3MzM2NDEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNTJdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTQ0NTcwNjcyMVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "maldy²²¹-ᴍᴅ" , // ```『 maldives ʙʏ maldy²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MaldY-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MaldY-MM®",
  ownername:process.env.OWNER_NAME|| "It'x MaldY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "de1639e7-98e0-483d-bcc9-523043be6bfd",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "MAKANI",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
