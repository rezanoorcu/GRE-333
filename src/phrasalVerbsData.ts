export interface PhrasalVerb {
  verb: string;
  meaning: string;
  example: string;
  category: string;
}

export const PHRASAL_VERBS_DATA: PhrasalVerb[] = [
  // Fall
  { verb: 'Fall off', meaning: 'Decrease / come off a surface', example: 'Productivity fell off during the summer holidays.', category: 'Fall' },
  { verb: 'Fall under', meaning: 'Be classified as', example: 'This responsibility falls under the finance department.', category: 'Fall' },
  { verb: 'Fall down', meaning: 'Fail to meet expectations', example: 'The proposal fell down when it came to the budget section.', category: 'Fall' },
  { verb: 'Fall back on', meaning: 'Use when other options fail', example: 'She had savings to fall back on when she lost her job.', category: 'Fall' },
  { verb: 'Fall behind', meaning: 'Fail to keep pace with others', example: 'Don\'t fall behind in your studies during the exam season.', category: 'Fall' },
  { verb: 'Fall out', meaning: 'Quarrel / hair or teeth coming out', example: 'The two partners fell out over financial disagreements.', category: 'Fall' },
  { verb: 'Fall through', meaning: 'Fail to happen', example: 'The business deal fell through at the last moment.', category: 'Fall' },
  { verb: 'Fall for', meaning: 'Be deceived / fall in love', example: 'Don\'t fall for misleading job advertisements online.', category: 'Fall' },
  { verb: 'Fall apart', meaning: 'Break into pieces / collapse emotionally', example: 'The project fell apart when the key members resigned.', category: 'Fall' },
  { verb: 'Fall in with', meaning: 'Agree to / join a group', example: 'She fell in with the plan after some initial hesitation.', category: 'Fall' },
  
  // Set
  { verb: 'Set apart', meaning: 'Distinguish from others', example: 'Her attention to detail sets her apart from other candidates.', category: 'Set' },
  { verb: 'Set up', meaning: 'Start a business or organisation', example: 'She set up her own legal firm after years of experience.', category: 'Set' },
  { verb: 'Set out', meaning: 'Begin a journey / explain a plan', example: 'The report sets out the key objectives of the department.', category: 'Set' },
  { verb: 'Set back', meaning: 'Delay progress', example: 'The flood set back the construction work by three months.', category: 'Set' },
  { verb: 'Set aside', meaning: 'Save for a purpose / ignore temporarily', example: 'We should set aside time each week for skills development.', category: 'Set' },
  { verb: 'Set off', meaning: 'Start a journey / trigger / cause', example: 'The false alarm set off a panic in the building.', category: 'Set' },
  { verb: 'Set down', meaning: 'Write or state formally / land a vehicle', example: 'All rules must be set down clearly in the employee handbook.', category: 'Set' },
  { verb: 'Set in', meaning: 'Begin and become established (bad things)', example: 'If bad habits set in early in your career, they\'re hard to break.', category: 'Set' },
  { verb: 'Set against', meaning: 'Oppose / make someone hostile to another', example: 'The rumours set the two departments against each other.', category: 'Set' },
  { verb: 'Set on', meaning: 'Attack suddenly / cause to do', example: 'He was set upon by a group outside the office building.', category: 'Set' },

  // Hold
  { verb: 'Hold on', meaning: 'Wait / grip tightly', example: 'Hold on for a moment — i need to check the file.', category: 'Hold' },
  { verb: 'Hold up', meaning: 'Delay / rob / support', example: 'Traffic held up the senior officer for nearly an hour.', category: 'Hold' },
  { verb: 'Hold out', meaning: 'Resist / remain available', example: 'The workers held out for better wages for three weeks.', category: 'Hold' },
  { verb: 'Hold back', meaning: 'Restrain / hesitate to share', example: 'Don\'t hold back your opinions in the group discussion.', category: 'Hold' },
  { verb: 'Hold off', meaning: 'Postpone / keep at a distance', example: 'We will hold off the decision until all reports are received.', category: 'Hold' },
  { verb: 'Hold down', meaning: 'Keep a job / suppress', example: 'She managed to hold down two jobs while studying at night.', category: 'Hold' },
  { verb: 'Hold over', meaning: 'Postpone / continue beyond expected time', example: 'The case was held over to the next session of court.', category: 'Hold' },
  { verb: 'Hold to', meaning: 'Oblige someone to keep a promise', example: 'We will hold the contractor to the agreed deadline.', category: 'Hold' },
  { verb: 'Hold with', meaning: 'Agree with (usually negative)', example: 'I don\'t hold with the idea of bending rules for any reason.', category: 'Hold' },
  { verb: 'Hold against', meaning: 'Blame someone for something', example: 'Don\'t hold his past mistakes against him — he has improved.', category: 'Hold' },

  // Ask
  { verb: 'Ask for', meaning: 'Request something', example: 'She asked for a raise after three years of service.', category: 'Ask' },
  { verb: 'Ask out', meaning: 'Invite someone on a date', example: 'He finally plucked up the courage to ask her out.', category: 'Ask' },
  { verb: 'Ask after', meaning: 'Enquire about someone\'s health or wellbeing', example: 'The principal asked after your progress in the new school.', category: 'Ask' },
  { verb: 'Ask around', meaning: 'Ask many people for information', example: 'I\'ll ask around the office and see who can help.', category: 'Ask' },
  { verb: 'Ask in', meaning: 'Invite someone inside', example: '\'There\'s someone at the door.\' \'well, ask them in!\'', category: 'Ask' },
  { verb: 'Ask over', meaning: 'Invite someone to your home', example: 'They asked us over for dinner on friday evening.', category: 'Ask' },
  { verb: 'Ask back', meaning: 'Invite someone in return', example: 'She asked him back for coffee after the evening walk.', category: 'Ask' },
  { verb: 'Ask of', meaning: 'Request something from someone (formal)', example: 'All we ask of you is honesty and punctuality in this role.', category: 'Ask' },
  { verb: 'Ask about', meaning: 'Inquire about a person or subject', example: 'The interviewer asked about my experience in project management.', category: 'Ask' },
  { verb: 'Ask along', meaning: 'Invite someone to join a group', example: 'They asked me along to the team lunch on the first day.', category: 'Ask' },

  // Break
  { verb: 'Break down', meaning: 'Stop working / lose emotional control / analyse', example: 'The car broke down on the way to the interview.', category: 'Break' },
  { verb: 'Break out', meaning: 'Escape / start suddenly (fire, war)', example: 'A fire broke out in the warehouse late at night.', category: 'Break' },
  { verb: 'Break up', meaning: 'End a relationship / dissolve', example: 'The company broke up into three separate divisions.', category: 'Break' },
  { verb: 'Break into', meaning: 'Enter by force / start suddenly', example: 'Thieves broke into the government office last night.', category: 'Break' },
  { verb: 'Break through', meaning: 'Make an important discovery / overcome', example: 'Scientists broke through a major barrier in cancer research.', category: 'Break' },
  { verb: 'Break off', meaning: 'Stop suddenly / end a relationship', example: 'Negotiations were broken off without reaching an agreement.', category: 'Break' },
  { verb: 'Break away', meaning: 'Escape / become independent', example: 'Several members broke away and formed a new party.', category: 'Break' },
  { verb: 'Break in', meaning: 'Enter illegally / interrupt / train', example: 'He kept breaking in while she was trying to explain.', category: 'Break' },
  { verb: 'Break even', meaning: 'Make neither profit nor loss', example: 'The company expects to break even by the end of this year.', category: 'Break' },
  { verb: 'Break with', meaning: 'End a relationship or tradition', example: 'He broke with family tradition and joined the civil service.', category: 'Break' },

  // Run
  { verb: 'Run out of', meaning: 'Have no more of something', example: 'The office ran out of paper in the middle of the workday.', category: 'Run' },
  { verb: 'Run into', meaning: 'Meet by chance / encounter a problem', example: 'We ran into several unexpected problems during the audit.', category: 'Run' },
  { verb: 'Run over', meaning: 'Hit with a vehicle / review quickly / exceed time', example: 'Let\'s run over the key points before the presentation.', category: 'Run' },
  { verb: 'Run across', meaning: 'Find or meet unexpectedly', example: 'I ran across an old colleague at the seminar last week.', category: 'Run' },
  { verb: 'Run away with', meaning: 'Be dominated by a feeling / steal', example: 'Don\'t let your emotions run away with you during the interview.', category: 'Run' },
  { verb: 'Run through', meaning: 'Rehearse / explain quickly / use up', example: 'Let\'s run through the agenda one more time before the meeting.', category: 'Run' },
  { verb: 'Run up', meaning: 'Accumulate debt or bills', example: 'He ran up a huge bill by making unnecessary purchases.', category: 'Run' },
  { verb: 'Run for', meaning: 'Be a candidate in an election', example: 'She is running for the position of mayor in the next election.', category: 'Run' },
  { verb: 'Run on', meaning: 'Operate using a specific fuel / continue too long', example: 'The generator runs on diesel and needs refuelling weekly.', category: 'Run' },
  { verb: 'Run down', meaning: 'Reduce gradually / criticise / hit someone', example: 'Don\'t run down a colleague\'s work in front of others.', category: 'Run' },

  // Carry
  { verb: 'Carry over', meaning: 'Transfer something to a later time', example: 'Unused leave can be carried over to the next year.', category: 'Carry' },
  { verb: 'Carry through', meaning: 'Complete something despite difficulties', example: 'He carried through his reforms despite strong opposition.', category: 'Carry' },
  { verb: 'Carry forward', meaning: 'Transfer a balance to the next period', example: 'The surplus budget was carried forward to the next quarter.', category: 'Carry' },
  { verb: 'Carry away', meaning: 'Lose control of emotions', example: 'Don\'t get carried away by excitement during the exam.', category: 'Carry' },
  { verb: 'Carry weight', meaning: 'Be influential or important', example: 'His opinion carries great weight in the department.', category: 'Carry' },
  { verb: 'Carry back', meaning: 'Bring back mentally to past time', example: 'The music carried her back to her student days.', category: 'Carry' },
  { verb: 'Carry with', meaning: 'Bring along / convince others', example: 'She carried her team with her through the entire project.', category: 'Carry' },
  { verb: 'Carry out', meaning: 'Perform or complete a task', example: 'The government will carry out a full investigation.', category: 'Carry' },
  { verb: 'Carry on', meaning: 'Continue doing something', example: 'Please carry on with your work while i make a call.', category: 'Carry' },
  { verb: 'Carry off', meaning: 'Win or achieve something difficult', example: 'She carried off the best speaker award convincingly.', category: 'Carry' },

  // Turn
  { verb: 'Turn down', meaning: 'Refuse / reduce volume or heat', example: 'He turned down the job offer because of the low salary.', category: 'Turn' },
  { verb: 'Turn up', meaning: 'Arrive unexpectedly / increase volume', example: 'He turned up at the interview an hour late.', category: 'Turn' },
  { verb: 'Turn out', meaning: 'Result in a certain way / attend', example: 'The event turned out to be a great success.', category: 'Turn' },
  { verb: 'Turn into', meaning: 'Change and become something else', example: 'The small startup turned into a multi-million dollar company.', category: 'Turn' },
  { verb: 'Turn over', meaning: 'Hand to authorities / flip / earn revenue', example: 'The witness turned over the evidence to the police.', category: 'Turn' },
  { verb: 'Turn against', meaning: 'Become hostile towards someone', example: 'Public opinion turned against the corrupt minister.', category: 'Turn' },
  { verb: 'Turn around', meaning: 'Improve a bad situation', example: 'The new ceo turned around the failing company in two years.', category: 'Turn' },
  { verb: 'Turn to', meaning: 'Ask for help / start a bad habit', example: 'In difficult times, people often turn to their family for support.', category: 'Turn' },
  { verb: 'Turn off', meaning: 'Switch off / lose interest', example: 'Please turn off your mobile phones during the examination.', category: 'Turn' },
  { verb: 'Turn in', meaning: 'Submit / go to bed / hand over to police', example: 'Please turn in your answer sheets when the time is up.', category: 'Turn' },

  // Look
  { verb: 'Look up', meaning: 'Search for information / improve', example: 'Always look up difficult words in the dictionary.', category: 'Look' },
  { verb: 'Look after', meaning: 'Take care of someone or something', example: 'Who will look after the office when the manager is away?', category: 'Look' },
  { verb: 'Look through', meaning: 'Read or examine quickly', example: 'He looked through the files but found nothing suspicious.', category: 'Look' },
  { verb: 'Look over', meaning: 'Check or review something', example: 'Please look over my application before i submit it.', category: 'Look' },
  { verb: 'Look into', meaning: 'Investigate or examine', example: 'The committee will look into the allegations of fraud.', category: 'Look' },
  { verb: 'Look up to', meaning: 'Admire and respect someone', example: 'Young employees look up to experienced and ethical leaders.', category: 'Look' },
  { verb: 'Look down on', meaning: 'Consider someone inferior', example: 'Never look down on people based on their background.', category: 'Look' },
  { verb: 'Look forward to', meaning: 'Anticipate with pleasure', example: 'We are looking forward to the national day celebration.', category: 'Look' },
  { verb: 'Look out for', meaning: 'Be careful / search for', example: 'Look out for spelling mistakes in your application form.', category: 'Look' },
  { verb: 'Look back on', meaning: 'Reflect on past events', example: 'Looking back on his career, he had no regrets.', category: 'Look' },

  // Bring
  { verb: 'Bring about', meaning: 'Cause something to happen', example: 'Good leadership brings about positive change in an organisation.', category: 'Bring' },
  { verb: 'Bring up', meaning: 'Raise a topic / raise a child', example: 'She brought up the issue of gender pay gap at the meeting.', category: 'Bring' },
  { verb: 'Bring out', meaning: 'Publish / reveal a quality', example: 'The new policy brings out the best in the employees.', category: 'Bring' },
  { verb: 'Bring forward', meaning: 'Move to an earlier time / propose', example: 'The exam has been brought forward to next week.', category: 'Bring' },
  { verb: 'Bring down', meaning: 'Reduce / cause to fall from power', example: 'The scandal brought down the government in just months.', category: 'Bring' },
  { verb: 'Bring in', meaning: 'Introduce a law or system / earn', example: 'The government brought in strict rules for online fraud.', category: 'Bring' },
  { verb: 'Bring off', meaning: 'Achieve something difficult', example: 'Against all odds, they brought off an incredible victory.', category: 'Bring' },
  { verb: 'Bring back', meaning: 'Cause to return / restore', example: 'The smell of rain brings back memories of childhood.', category: 'Bring' },
  { verb: 'Bring on', meaning: 'Cause something unpleasant / encourage', example: 'Stress can bring on headaches and other health problems.', category: 'Bring' },
  { verb: 'Bring together', meaning: 'Unite people or things', example: 'The project brought together experts from five different fields.', category: 'Bring' },

  // Put
  { verb: 'Put through', meaning: 'Connect by phone / cause to suffer', example: 'Please hold — i\'ll put you through to the manager.', category: 'Put' },
  { verb: 'Put off', meaning: 'Postpone / discourage someone', example: 'Don\'t put off important tasks until the last minute.', category: 'Put' },
  { verb: 'Put up with', meaning: 'Tolerate something unpleasant', example: 'Employees shouldn\'t have to put up with harassment at work.', category: 'Put' },
  { verb: 'Put forward', meaning: 'Propose or suggest an idea', example: 'She put forward a strong argument during the interview.', category: 'Put' },
  { verb: 'Put across', meaning: 'Communicate an idea clearly', example: 'He was able to put his points across very effectively.', category: 'Put' },
  { verb: 'Put out', meaning: 'Extinguish / inconvenience someone', example: 'Firefighters put out the blaze within two hours.', category: 'Put' },
  { verb: 'Put down', meaning: 'Insult / write down / suppress a revolt', example: 'Don\'t put down others\' ideas in a team meeting.', category: 'Put' },
  { verb: 'Put in', meaning: 'Submit formally / invest time or effort', example: 'You have to put in a lot of effort to pass competitive exams.', category: 'Put' },
  { verb: 'Put together', meaning: 'Assemble or organise something', example: 'The team put together an excellent presentation for the board.', category: 'Put' },
  { verb: 'Put back', meaning: 'Delay / return something to its place', example: 'The meeting has been put back to thursday afternoon.', category: 'Put' },

  // Give
  { verb: 'Give up', meaning: 'Stop doing something / surrender', example: 'Never give up on your goals, no matter how hard it gets.', category: 'Give' },
  { verb: 'Give in', meaning: 'Surrender or yield to pressure', example: 'After long negotiations, the management gave in to the demands.', category: 'Give' },
  { verb: 'Give away', meaning: 'Reveal a secret / give something free', example: 'Her nervous smile gave away the fact that she was hiding something.', category: 'Give' },
  { verb: 'Give back', meaning: 'Return something to the owner', example: 'He gave back all the borrowed materials before leaving.', category: 'Give' },
  { verb: 'Give out', meaning: 'Distribute / stop working / announce', example: 'The volunteers gave out food to the flood victims.', category: 'Give' },
  { verb: 'Give off', meaning: 'Emit gas, heat, or smell', example: 'The factory gives off toxic fumes that harm the environment.', category: 'Give' },
  { verb: 'Give rise to', meaning: 'Cause something to develop or happen', example: 'The new policy gave rise to widespread protests among workers.', category: 'Give' },
  { verb: 'Give over to', meaning: 'Dedicate time or space to something', example: 'The hall was given over to the award ceremony.', category: 'Give' },
  { verb: 'Give way to', meaning: 'Be replaced by / yield', example: 'Traditional banking is giving way to digital payments.', category: 'Give' },
  { verb: 'Give forth', meaning: 'Produce or emit (formal/literary)', example: 'The speaker gave forth a powerful speech that moved everyone.', category: 'Give' },

  // Take
  { verb: 'Take on', meaning: 'Accept responsibility or a challenge', example: 'She took on the extra project despite her busy schedule.', category: 'Take' },
  { verb: 'Take over', meaning: 'Gain control of a business or role', example: 'A larger company took over the small firm last year.', category: 'Take' },
  { verb: 'Take up', meaning: 'Start a hobby / occupy time or space', example: 'He took up painting after retiring from his job.', category: 'Take' },
  { verb: 'Take after', meaning: 'Resemble a parent or relative', example: 'She takes after her mother — both are very determined.', category: 'Take' },
  { verb: 'Take away', meaning: 'Remove something', example: 'The police took away all the documents as evidence.', category: 'Take' },
  { verb: 'Take back', meaning: 'Return or withdraw a statement', example: 'I take back what i said — you were absolutely right.', category: 'Take' },
  { verb: 'Take in', meaning: 'Deceive / understand / provide shelter', example: 'Don\'t be taken in by false promises during interviews.', category: 'Take' },
  { verb: 'Take off', meaning: 'Remove / become successful / leave the ground', example: 'The new product took off immediately after launch.', category: 'Take' },
  { verb: 'Take out', meaning: 'Remove / borrow from a library / go on a date', example: 'He took out a loan to start his business.', category: 'Take' },
  { verb: 'Take to', meaning: 'Begin to like / develop a habit', example: 'She took to her new job immediately and impressed everyone.', category: 'Take' },

  // Get
  { verb: 'Get rid of', meaning: 'Remove or eliminate something', example: 'We need to get rid of old documents that are no longer needed.', category: 'Get' },
  { verb: 'Get through', meaning: 'Finish / make contact / survive', example: 'She finally got through to the customer service after an hour.', category: 'Get' },
  { verb: 'Get up to', meaning: 'Do something (often mischievous)', example: 'What have you been getting up to while i was away?', category: 'Get' },
  { verb: 'Get ahead', meaning: 'Make progress / be successful', example: 'You need good communication skills to get ahead in this field.', category: 'Get' },
  { verb: 'Get across', meaning: 'Successfully communicate an idea', example: 'The teacher struggled to get her point across to the students.', category: 'Get' },
  { verb: 'Get along / on', meaning: 'Have a friendly relationship', example: 'He gets along well with all his colleagues.', category: 'Get' },
  { verb: 'Get away with', meaning: 'Do something wrong without punishment', example: 'He cheated in the exam and got away with it.', category: 'Get' },
  { verb: 'Get by', meaning: 'Manage to survive with limited resources', example: 'It\'s hard to get by on such a low salary.', category: 'Get' },
  { verb: 'Get down to', meaning: 'Start working seriously on something', example: 'Let\'s get down to business and discuss the proposal.', category: 'Get' },
  { verb: 'Get over', meaning: 'Recover from illness or difficulty', example: 'It took her months to get over the loss of her job.', category: 'Get' },

  // Come
  { verb: 'Come across', meaning: 'Find by chance / make an impression', example: 'I came across an interesting article about the exam.', category: 'Come' },
  { verb: 'Come up with', meaning: 'Think of an idea or plan', example: 'She came up with a brilliant solution to the problem.', category: 'Come' },
  { verb: 'Come into', meaning: 'Inherit money or property', example: 'He came into a large fortune when his uncle died.', category: 'Come' },
  { verb: 'Come about', meaning: 'Happen, occur', example: 'How did the change in policy come about so quickly?', category: 'Come' },
  { verb: 'Come forward', meaning: 'Volunteer information or help', example: 'No witnesses came forward after the accident.', category: 'Come' },
  { verb: 'Come down to', meaning: 'Reduce to the most important factor', example: 'It all comes down to hard work and preparation.', category: 'Come' },
  { verb: 'Come up against', meaning: 'Face a problem or obstacle', example: 'They came up against serious budget problems during the project.', category: 'Come' },
  { verb: 'Come round / around', meaning: 'Regain consciousness / change opinion', example: 'She slowly came round after the operation.', category: 'Come' },
  { verb: 'Come out', meaning: 'Become known / be published', example: 'The results will come out next monday.', category: 'Come' },
  { verb: 'Come off', meaning: 'Succeed / happen as planned', example: 'The plan didn\'t quite come off as we had hoped.', category: 'Come' },

  // Make
  { verb: 'Make up', meaning: 'Invent a story / reconcile after a fight', example: 'She made up an excuse for being late. / they fought but quickly made up.', category: 'Make' },
  { verb: 'Make out', meaning: 'Understand or manage to see/hear something', example: 'I couldn\'t make out what he was saying over the noise.', category: 'Make' },
  { verb: 'Make up for', meaning: 'Compensate for something', example: 'He worked overtime to make up for the lost time.', category: 'Make' },
  { verb: 'Make off with', meaning: 'Steal and run away', example: 'The thief made off with the jewellery before anyone noticed.', category: 'Make' },
  { verb: 'Make for', meaning: 'Move towards / contribute to', example: 'They made for the exit as soon as the alarm rang.', category: 'Make' },
  { verb: 'Make of', meaning: 'Understand or have an opinion about', example: 'What do you make of the new manager\'s behaviour?', category: 'Make' },
  { verb: 'Make do with', meaning: 'Manage with something insufficient', example: 'We had to make do with cold food because the oven broke.', category: 'Make' },
  { verb: 'Make over', meaning: 'Transfer ownership / completely change', example: 'She made over the business to her daughter before retiring.', category: 'Make' },
  { verb: 'Make into', meaning: 'Transform or convert something', example: 'They made the old factory into a shopping mall.', category: 'Make' },
  { verb: 'Make away with', meaning: 'Kill someone / steal something', example: 'The gang made away with millions from the bank.', category: 'Make' }
];
