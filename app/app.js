// ============================================================
// DATA: Mission Codes (unlock via 4-digit code from War Room)
// ============================================================
const MISSION_CODES = {
    '2405': [
        { id: 'm1a', title: 'Audio Log 0 — เสียงในห้อง', content: 'บันทึกเสียงในโทรศัพท์โชกุน:\n[1] เสียงประตูถูกไข → [2] เสียงบิดขวดน้ำ → [3] เสียงหยดสาร → [4] เสียงกระดิ่งพวงกุญแจก่อนประตูปิด' },
        { id: 'm1b', title: 'Log ระบบคัตเอาต์', content: 'บันทึก Smart Campus: รหัสนักศึกษา "ปังปอน" Access ตู้คัตเอาต์อาคาร 4 เวลา 18:25 น.' }
    ],
    '7812': [
        { id: 'm2', title: 'Goodnotes PDF — บันทึกลับโชกุน', content: 'พบการแก้ตัวเลขงบประมาณค่าเช่าอุปกรณ์ของฝ่ายสถานที่ (พีช) — ใบเสร็จจริง 94,500 บาท บัญชีบันทึก 12,000 บาท เงิน 82,500 บาทหายไปไหน? เตรียมส่งคณบดีวันจันทร์' }
    ],
    '9356': [
        { id: 'm3', title: 'รายงานชันสูตร', content: 'ผลชันสูตรโชกุน: เสียชีวิตจากพิษไซยาไนด์ (อาการน้ำลายฟูมปาก ชักเฉียบพลัน) แต่ในกระเพาะพบยานอนหลับปริมาณมากด้วย — มีสารพิษ 2 ชนิดในร่าง' }
    ]
};

// ============================================================
// DATA: QR Stations — Multi-Question Format
// questions[].a = index of correct answer (0-based)
// ============================================================
const QR_DATA = {
    'QR-01': {
        title: 'QR-01 | ห้อง B — ปฏิทินค่าย',
        context: '📍 ตรวจสอบปฏิทินค่ายที่แขวนผนังห้อง B ให้ละเอียด',
        questions: [
            { q: 'ใครเซ็นชื่อรับผิดชอบอุปกรณ์ทุกรายการในปฏิทิน?', opts: ['โชกุน', 'พีช', 'อิง', 'ม่านฟ้า'], a: 1 },
            { q: 'ค่ายจัดขึ้นวันที่เท่าไหร่?', opts: ['1, 2, 3', '15, 16, 17', '29, 30, 31', '20, 21, 22'], a: 2 },
            { q: 'พีชเข้าอาคาร 4 ก่อนไฟดับกี่นาที?', opts: ['5 นาที', '10 นาที', '15 นาที', '30 นาที'], a: 2 },
            { q: 'พีชคือฝ่ายอะไรในค่าย?', opts: ['สวัสดิการ', 'PR', 'ดีไซน์', 'สถานที่'], a: 3 }
        ],
        clue: '🔍 พีชรับผิดชอบอุปกรณ์ทั้งหมดและเข้าอาคาร 4 ก่อนไฟดับ 15 นาที โดยไม่มีพยาน'
    },
    'QR-02': {
        title: 'QR-02 | ห้อง A — โต๊ะดีไซน์',
        context: '📍 ตรวจสอบกระดาษร่างเสื้อกองบนโต๊ะนี้ทุกแผ่น',
        questions: [
            { q: 'มีกระดาษที่มีรอย "แก้อีกครั้ง" สีแดงกี่แผ่น?', opts: ['5 แผ่น', '8 แผ่น', '10 แผ่น', '15 แผ่น'], a: 2 },
            { q: 'ม่านฟ้าคือฝ่ายอะไร?', opts: ['สถานที่', 'สวัสดิการ', 'PR', 'ดีไซน์'], a: 3 },
            { q: 'ม่านฟ้าและโชกุนขัดแย้งกันเรื่องอะไร?', opts: ['งบประมาณ', 'ตารางเวลา', 'การออกแบบเสื้อกอง', 'เรื่องส่วนตัว'], a: 2 },
            { q: 'ม่านฟ้ามี Alibi ในช่วงไฟดับ (18:25-18:35) ไหม?', opts: ['มี อยู่คนละฝั่งอาคาร', 'มี แต่ไม่ชัด', 'ไม่มี', 'ไม่แน่ใจ'], a: 0 }
        ],
        clue: '🔍 ม่านฟ้าโกรธโชกุนจริง แต่มีพยานยืนยันว่าอยู่คนละฝั่งในช่วงไฟดับ — ตัดออกจากรายชื่อฆาตกร'
    },
    'QR-03': {
        title: 'QR-03 | โถงทางเดิน — หลังเสา',
        context: '📍 เปิดแฟ้มคดี — ดูใบเสร็จค่าเช่าอุปกรณ์และสมุดบัญชีค่ายเทียบกัน',
        questions: [
            { q: 'ใบเสร็จค่าเช่าอุปกรณ์รวมทั้งสิ้นกี่บาท?', opts: ['12,000 บาท', '50,000 บาท', '94,500 บาท', '30,000 บาท'], a: 2 },
            { q: 'สมุดบัญชีค่ายบันทึกค่าเช่าอุปกรณ์ไว้กี่บาท?', opts: ['12,000 บาท', '94,500 บาท', '50,000 บาท', '30,000 บาท'], a: 0 },
            { q: 'เงินหายไปจากบัญชีประมาณกี่บาท?', opts: ['12,000 บาท', '50,000 บาท', '82,500 บาท', '94,500 บาท'], a: 2 },
            { q: 'ลายเซ็นในทั้งสองเอกสารเป็นของใคร?', opts: ['โชกุน', 'พีช', 'อิง', 'สายน้ำ'], a: 1 }
        ],
        clue: '🔍 พีชปลอมบัญชี ลายเซ็นเดียวกันในสองเอกสาร ตัวเลขต่างกัน 82,500 บาท หายไปกระเป๋าพีช'
    },
    'QR-04': {
        title: 'QR-04 | ห้อง C — ในหนังสือ',
        context: '📍 เปิดแฟ้มคดี — ดูบทสนทนา Discord Anonymous ก่อนตอบ',
        questions: [
            { q: 'Discord Anonymous ส่งข้อความถึงสายน้ำตอนกี่โมง?', opts: ['16:00 น.', '17:55 น.', '18:25 น.', '19:00 น.'], a: 1 },
            { q: 'แอคปริศนาสั่งให้สายน้ำทำอะไร?', opts: ['ไปเช็คระบบไฟ', 'ไปดูโชกุน', 'ลบรูปในห้องโชกุน', 'เอา SD Card จากห้องโชกุน'], a: 3 },
            { q: 'สายน้ำตอบสนองต่อ Discord ยังไง?', opts: ['โกรธและปฏิเสธ', 'ตกลงทันที', 'สับสน ไม่เข้าใจ', 'แจ้งโชกุน'], a: 2 },
            { q: 'ใครได้ประโยชน์มากที่สุดถ้าสายน้ำถูกสงสัย?', opts: ['อิง', 'ม่านฟ้า', 'ปังปอน', 'พีช'], a: 3 }
        ],
        clue: '🔍 สายน้ำถูกพีชวางกับดักผ่าน Discord เพื่อให้เป็นแพะรับบาปแทน'
    },
    'QR-05': {
        title: 'QR-05 | ห้องน้ำอาคาร 4',
        context: '📍 ตรวจสอบหลักฐานในห้องน้ำ — ทิชชูเปียก, รองเท้าแตะ, พื้นที่เปียก',
        questions: [
            { q: 'หลักฐานอะไรบ่งบอกว่ามีคนออกมาอย่างรีบเร่ง?', opts: ['รอยมือบนกำแพง', 'ทิชชูเปียก + รองเท้าลืม', 'ประตูพัง', 'เสียงดัง'], a: 1 },
            { q: 'พื้นรองเท้าแตะเปียก แต่พื้นโรงอาหารแห้ง น้ำมาจากไหน?', opts: ['ฝนตก', 'แก้วน้ำหก', 'ห้องน้ำอาคาร 4', 'ระบบดับเพลิง'], a: 2 },
            { q: 'การย้ายศพจากโรงอาหารไปห้องการเงินต้องผ่านที่ไหน?', opts: ['ประตูหน้า', 'บันไดหลัง', 'ห้องน้ำอาคาร 4', 'ทางลัดนอกอาคาร'], a: 2 },
            { q: 'หลักฐานทั้งหมดชี้ว่าใครน่าจะทิ้งรองเท้าไว้ที่นี่?', opts: ['พีช', 'อิง', 'ปังปอน (คนย้ายศพ)', 'สายน้ำ'], a: 2 }
        ],
        clue: '🔍 คนย้ายศพผ่านห้องน้ำ รีบจนลืมรองเท้า — ร่องรอยเชื่อมตรงไปที่ปังปอน'
    },
    'QR-06': {
        title: 'QR-06 | โต๊ะปังปอน — ลิ้นชัก',
        context: '📍 อ่านสมุดบันทึกปังปอน + ฟัง Audio Clip 5 แล้วตอบ',
        questions: [
            { q: 'บันทึกระบบระบุว่าปังปอน Access คัตเอาต์เวลาเท่าไหร่?', opts: ['18:00 น.', '18:10 น.', '18:25 น.', '18:40 น.'], a: 2 },
            { q: 'ปังปอนเขียนในสมุดว่าทำไมถึงสับคัตเอาต์?', opts: ['ไฟฟ้าขัดข้อง', 'ทดสอบระบบ', 'แกล้งโชกุนให้คอมดับ', 'ตามคำสั่ง'], a: 2 },
            { q: 'ปังปอนพบอะไรหลังจากสับคัตเอาต์ขึ้น?', opts: ['ไม่มีอะไร', 'อุปกรณ์เสียหาย', 'โชกุนนอนไม่รู้สึกตัว', 'กล่องพัสดุ'], a: 2 },
            { q: 'ปังปอนย้ายศพเพราะอะไร?', opts: ['ตามแผนที่วางไว้', 'ช่วยโชกุน', 'กลัวถูกสงสัยเรื่องคัตเอาต์', 'รับคำสั่งจากคนอื่น'], a: 2 }
        ],
        clue: '🔍 ปังปอนสับคัตเอาต์เพื่อแกล้งเท่านั้น ไม่ได้ตั้งใจฆ่า เขาย้ายศพเพราะตกใจและกลัว — เขาคือพยาน ไม่ใช่ฆาตกร'
    },
    'QR-07': {
        title: 'QR-07 | เสาหน้าอาคาร 4 — โคนเสา',
        context: '📍 เปิดแฟ้มคดี — ดู Goodnotes PDF บันทึกลับโชกุน',
        questions: [
            { q: 'โชกุนวางแผนส่งไฟล์ PDF ให้ใคร?', opts: ['อาจารย์ที่ปรึกษา', 'ฝ่ายการเงิน', 'คณบดี', 'ตำรวจ'], a: 2 },
            { q: 'โชกุนจะส่งไฟล์เมื่อไหร่?', opts: ['วันศุกร์นั้น', 'เสาร์-อาทิตย์', 'วันจันทร์หลังค่าย', 'วันค่ายเลย'], a: 2 },
            { q: 'ไฟล์ PDF มีเนื้อหาเกี่ยวกับอะไร?', opts: ['ผลการจัดค่าย', 'ภาพถ่ายกิจกรรม', 'หลักฐานทุจริตงบค่าย', 'รายชื่อผู้เข้าร่วม'], a: 2 },
            { q: 'ถ้าโชกุนส่งไฟล์ได้ ใครจะได้รับผลกระทบมากที่สุด?', opts: ['อิง', 'ม่านฟ้า', 'สายน้ำ', 'พีช'], a: 3 }
        ],
        clue: '🔍 พีชมีเวลาแค่คืนค่ายคืนเดียว ก่อนไฟล์จะถึงคณบดีในวันจันทร์ — นั่นคือแรงจูงใจฆ่า'
    },
    'QR-08': {
        title: 'QR-08 | ห้องการเงิน — ลิ้นชักโชกุน',
        context: '📍 ตรวจสอบโน้ตสีเหลืองบนจอ + กล่องยาในลิ้นชักโต๊ะโชกุน',
        questions: [
            { q: 'โน้ตสีเหลืองเขียนว่าจะแนบอะไรส่งคณบดี?', opts: ['รูปถ่ายค่าย', 'ใบเสร็จ', 'Goodnotes PDF', 'สมุดบัญชี'], a: 2 },
            { q: 'พบยาอะไรในลิ้นชักโต๊ะโชกุน?', opts: ['พาราเซตามอล', 'วิตามิน', 'NightEase (ยานอนหลับ)', 'ยาแก้ปวดหัว'], a: 2 },
            { q: 'ยา NightEase มีสรรพคุณอะไร?', opts: ['แก้ปวด', 'ลดไข้', 'ช่วยให้นอนหลับ', 'เพิ่มพลังงาน'], a: 2 },
            { q: 'ใครเข้าถึงห้องการเงินและโต๊ะโชกุนได้?', opts: ['ทุกคน', 'เฉพาะโชกุน', 'สมาชิกทีมที่มีกุญแจ', 'เฉพาะ Staff'], a: 2 }
        ],
        clue: '🔍 มียานอนหลับในห้องโชกุน + มีคนนัดพบที่ห้องนี้ — ใครคือคนที่มาจริง?'
    },
    'QR-09': {
        title: 'QR-09 | ห้องการเงิน — หลังกรอบรูป',
        context: '📍 ข้อมูลทางการแพทย์ + อาการของโชกุนที่พยานให้การไว้',
        questions: [
            { q: 'ยานอนหลับเกินขนาดทำให้เกิดอาการใด?', opts: ['ชัก น้ำลายฟูมปาก', 'หลับลึก หายใจช้า แต่ฟื้นได้', 'เสียชีวิตทันที', 'ปวดหัว ตาแดง'], a: 1 },
            { q: 'ไซยาไนด์ทำให้เกิดอาการใด?', opts: ['ชัก น้ำลายฟูมปาก เสียชีวิตเร็ว', 'หลับสนิท', 'ปวดหัว', 'คลื่นไส้อาเจียน'], a: 0 },
            { q: 'อาการที่พบในโชกุนตรงกับสารชนิดใด?', opts: ['ยานอนหลับ', 'ไซยาไนด์', 'ทั้งสองอย่าง', 'ไม่ระบุ'], a: 1 },
            { q: 'แปลว่าในร่างโชกุนมีสารกี่ชนิด?', opts: ['1 ชนิด (แค่ไซยาไนด์)', '2 ชนิด (ยานอนหลับ + ไซยาไนด์)', '3 ชนิด', 'ไม่มีสาร'], a: 1 }
        ],
        clue: '🔍 มีสองคนที่ "ทำร้าย" โชกุน — อิงใส่ยานอนหลับ, มีคนอื่นหยดไซยาไนด์ทับ คนไหนคือฆาตกรจริง?'
    },
    'QR-10': {
        title: 'QR-10 | ห้องการเงิน — ใต้แฟ้มกอง',
        context: '📍 ตรวจสอบสมุดบัญชีค่ายที่มีรอยน้ำยาลบ',
        questions: [
            { q: 'คอลัมน์ไหนในบัญชีมีรอยน้ำยาลบและเขียนทับ?', opts: ['ค่าอาหาร', 'ค่าโปรโมท', 'ค่าสถานที่', 'ค่าเช่าอุปกรณ์ฝ่ายสถานที่'], a: 3 },
            { q: 'ฝ่ายสถานที่คือใคร?', opts: ['อิง', 'สายน้ำ', 'พีช', 'ม่านฟ้า'], a: 2 },
            { q: 'ลักษณะรอยแก้เป็นยังไง?', opts: ['ขีดฆ่าสีแดง', 'ลบด้วยยางลบ', 'น้ำยาลบแล้วเขียนทับ', 'ฉีกหน้ากระดาษ'], a: 2 },
            { q: 'ตัวเลขที่ถูกเขียนทับน่าจะเป็นตัวเลขจริงเท่าไหร่?', opts: ['94,500 บาท', '12,000 บาท', '50,000 บาท', '30,000 บาท'], a: 0 }
        ],
        clue: '🔍 พีชแก้ตัวเลขจาก 94,500 → 12,000 บาท ลายมือเดียวกับลายเซ็น — เงินส่วนต่างเข้ากระเป๋าพีช'
    },
    'QR-11': {
        title: 'QR-11 | ห้องการเงิน — หลังโปสเตอร์',
        context: '📍 ฟัง Audio Clip 4 (อิง × โชกุน) ให้จบก่อนตอบทุกข้อ',
        questions: [
            { q: 'อิงอ้างว่ามาพบโชกุนที่ห้องการเงินเพื่อเรื่องอะไร?', opts: ['เรื่องเสื้อกอง', 'เรื่องโปรโมท', 'งบประมาณอาหาร', 'เรื่องส่วนตัว'], a: 2 },
            { q: 'โชกุนให้อิงแก้รายการเบรก/อาหารรอบที่เท่าไหร่แล้ว?', opts: ['รอบที่ 5', 'รอบที่ 10', 'รอบที่ 15', 'รอบที่ 20'], a: 2 },
            { q: 'อิงพูดกับตัวเองว่าจะแกล้งโชกุนยังไง?', opts: ['ให้ล้มหกล้ม', 'ให้คอมดับ', 'ให้หลับ 2-3 วัน หรือตลอดไป', 'ทำลายไฟล์'], a: 2 },
            { q: 'ยานอนหลับที่อิงใช้ทำให้โชกุนตายได้ไหม?', opts: ['ได้แน่นอน', 'ได้ถ้าใส่เยอะพอ', 'ไม่ได้ — แค่ทำให้หลับ', 'ขึ้นอยู่กับขนาดยา'], a: 2 }
        ],
        clue: '🔍 อิงใส่ยาจริง แต่ยาของอิงแค่ทำให้โชกุนหลับ — ไม่ใช่สาเหตุที่ทำให้ตาย มีคนฉวยโอกาสใส่ไซยาไนด์ทับอีกที'
    },
    'QR-12': {
        title: 'QR-12 | โรงอาหาร — ใต้โต๊ะโชกุน',
        context: '📍 ตรวจสอบใต้โต๊ะประธาน — กิ๊บสีชมพู, พวงกุญแจกระดิ่ง, รอยลากบนพื้น',
        questions: [
            { q: 'รอยลากบนพื้นพุ่งไปทิศไหน?', opts: ['ออกนอกอาคาร', 'ทางห้องน้ำ', 'ทางห้องการเงิน', 'ทางห้อง B'], a: 2 },
            { q: 'กิ๊บสีชมพูที่พบใต้โต๊ะน่าจะเป็นของใคร?', opts: ['พีช', 'อิง', 'สายน้ำ', 'ม่านฟ้า'], a: 1 },
            { q: 'พวงกุญแจกระดิ่งเชื่อมกับเสียงไหนใน Audio Log?', opts: ['เสียงแรก', 'เสียงสอง', 'เสียงสาม', 'เสียงสุดท้าย'], a: 3 },
            { q: 'โชกุนตายที่ไหนจริงๆ?', opts: ['ห้องการเงิน', 'ห้อง B', 'โรงอาหาร', 'ห้องน้ำ'], a: 2 }
        ],
        clue: '🔍 โชกุนตายที่โรงอาหาร รอยลากพิสูจน์ว่าศพถูกย้าย กิ๊บสีชมพูยืนยันว่าอิงอยู่ที่โต๊ะนี้'
    },
    'QR-13': {
        title: 'QR-13 | โรงอาหาร — หลังตู้เย็น 🎵',
        context: '📍 กด ▶ ฟัง Audio Log 0 ให้จบก่อน แล้วตอบทุกข้อ',
        questions: [
            { q: 'เสียงแรกใน Audio Log คืออะไร?', opts: ['เสียงแก้วแตก', 'เสียงประตูถูกไข', 'เสียงก้าวเดิน', 'เสียงตะโกน'], a: 1 },
            { q: 'หลังเสียงบิดขวดน้ำ ได้ยินเสียงอะไรต่อ?', opts: ['เสียงดื่มน้ำ', 'เสียงพูด', 'เสียงหยดสาร', 'เสียงวิ่ง'], a: 2 },
            { q: 'เสียงสุดท้ายก่อนจบ Audio Log คืออะไร?', opts: ['เสียงร้องขอความช่วยเหลือ', 'เสียงล้มหกล้ม', 'เสียงกระดิ่งก่อนประตูปิด', 'เสียงเงียบ'], a: 2 },
            { q: 'Audio Log บอกว่าคนร้ายทำอะไรในห้อง?', opts: ['ค้นหาของ', 'ทะเลาะกัน', 'เปิดขวด หยดสาร แล้วออกไป', 'นอนหลับ'], a: 2 }
        ],
        clue: '🔍 มีคนแอบเข้ามาด้วย Master Key หยดสารบางอย่างลงขวดน้ำโชกุน แล้วออกไปก่อนที่ใครจะรู้'
    },
    'QR-14': {
        title: 'QR-14 | โรงอาหาร — ใต้เก้าอี้มุม',
        context: '📍 ข้อมูลไซยาไนด์ + ไทม์ไลน์ช่วงไฟดับ (18:25-18:35 น.)',
        questions: [
            { q: 'ไซยาไนด์ออกฤทธิ์ผ่านทางใดในกรณีนี้?', opts: ['ทางผิวหนัง', 'ทางอากาศ', 'ทางการดื่มกิน', 'ทางการสัมผัส'], a: 2 },
            { q: 'ช่วงไฟดับ (18:25-18:35) ใครไม่มี Alibi ที่ชัดเจน?', opts: ['อิง', 'ปังปอน', 'สายน้ำ', 'พีช'], a: 3 },
            { q: 'ใครเข้าถึงขวดน้ำโชกุนในโรงอาหารช่วงมืดได้?', opts: ['คนรู้ตำแหน่งโต๊ะ', 'คนมีไฟฉาย', 'ทั้งสองอย่าง', 'ไม่มีใคร'], a: 2 },
            { q: 'พีชรู้ว่าโต๊ะโชกุนอยู่ที่ไหนไหม?', opts: ['ไม่รู้', 'อาจรู้', 'รู้ เพราะเป็นคนเตรียมสถานที่', 'ไม่แน่ใจ'], a: 2 }
        ],
        clue: '🔍 พีชเป็นคนเตรียมสถานที่ รู้ว่าโต๊ะโชกุนอยู่ที่ไหน และไม่มีพยานช่วงไฟดับ'
    },
    'QR-15': {
        title: 'QR-15 | โรงอาหาร — หลังป้ายเมนู',
        context: '📍 เปิดแฟ้มคดี — ดูบทสนทนาพีช × โชกุน 2 เดือนก่อนค่าย',
        questions: [
            { q: 'โชกุนนัดพีชไว้ล่วงหน้าก่อนค่ายกี่เดือน?', opts: ['1 เดือน', '2 เดือน', '3 เดือน', '4 เดือน'], a: 1 },
            { q: 'พีชบอกตอนแรกว่าอาจมาไม่ได้เพราะอะไร?', opts: ['ป่วย', 'สอบ', 'อาจฝึกงาน', 'ติดธุระ'], a: 2 },
            { q: 'โชกุนขอร้องพีชให้มาด้วยเหตุผลอะไร?', opts: ['จะจ่ายค่าตอบแทน', 'ให้ตำแหน่ง', 'ถือว่าขอในฐานะเพื่อน', 'งานนี้สำคัญมาก'], a: 2 },
            { q: 'พีชรู้วันจัดค่ายล่วงหน้ากี่เดือน?', opts: ['ไม่รู้ล่วงหน้า', '1 เดือน', '2 เดือน', '3 เดือน'], a: 2 }
        ],
        clue: '🔍 พีชรู้วันค่ายล่วงหน้า 2 เดือน มีเวลาวางแผนฆ่าโชกุนอย่างรอบคอบตั้งแต่ต้น'
    },
    'QR-16': {
        title: 'QR-16 | เสานอกโรงอาหาร — โคนเสา',
        context: '📍 ฟัง Audio Clip 1 (พีช × โชกุน) ให้จบก่อน แล้วตอบทุกข้อ',
        questions: [
            { q: 'พีชพูดกับตัวเองว่าอะไรหลังวางสาย?', opts: ['ไม่อยากไปเลย', 'เซ็งจัง', 'ก็โอเคนะ', 'รู้สึกโชคดีจังเลย'], a: 3 },
            { q: 'น้ำเสียงของพีชตอนวางสายเป็นยังไง?', opts: ['เศร้า', 'กลัว', 'โกรธ', 'ยิ้มอย่างพึงพอใจ'], a: 3 },
            { q: 'พีชบอกโชกุนว่าอาจมาไม่ได้เพราะอะไร?', opts: ['ป่วย', 'สอบ', 'อาจฝึกงาน', 'งานยุ่ง'], a: 2 },
            { q: 'คนถูกบังคับมาค่ายจะรู้สึก "โชคดี" ได้ไหม?', opts: ['ได้ปกติ', 'ได้บางครั้ง', 'ไม่ได้ — พีชโกหก', 'แล้วแต่คน'], a: 2 }
        ],
        clue: '🔍 พีชรู้สึก "โชคดี" ที่ได้มาค่าย ทั้งที่บอกว่าถูกบังคับ — เขามีแผนในใจตั้งแต่วันที่รับสายโชกุน'
    },
    'QR-17': {
        title: 'QR-17 | ทางเดินกลางแจ้ง',
        context: '📍 ตรวจสอบรอยบนพื้นทางเดิน + ผังอาคารในแฟ้มคดี',
        questions: [
            { q: 'ทางเดินนี้เชื่อมระหว่างที่ไหนกับที่ไหน?', opts: ['ห้อง A กับ ห้อง B', 'โรงอาหารกับอาคาร 4', 'ห้องการเงินกับห้องน้ำ', 'อาคาร 4 กับที่จอดรถ'], a: 1 },
            { q: 'ถ้าต้องย้ายศพจากโรงอาหารไปห้องการเงิน ต้องผ่านที่นี่ไหม?', opts: ['ไม่จำเป็น', 'มีทางอื่น', 'ต้องผ่านที่นี่', 'ไม่สามารถพิสูจน์ได้'], a: 2 },
            { q: 'รอยบนพื้นทางเดินบอกอะไร?', opts: ['มีคนวิ่งผ่าน', 'มีการลากบางอย่างผ่าน', 'มีรถผ่าน', 'ไม่มีอะไรพิเศษ'], a: 1 },
            { q: 'หลักฐานทั้งหมดชี้ว่าใครเดินผ่านที่นี่ช่วงไฟดับ?', opts: ['พีช', 'อิง', 'ปังปอน (ย้ายศพ)', 'สายน้ำ'], a: 2 }
        ],
        clue: '🔍 เส้นทางการย้ายศพชัดเจน: โรงอาหาร → ทางเดินนี้ → ห้องน้ำ → ห้องการเงิน ปังปอนเป็นคนย้าย แต่ไม่ได้ฆ่า'
    }
};

// ============================================================
// DATA: Interrogation
// ============================================================
const TRUTHS = {
    'ปังปอน': { lie: 'ไม่ได้ไปที่สับคัตเอาต์', ev: 'ev-log-ip' },
    'อิง': { lie: 'ไม่ได้วางยา', ev: 'ev-line-chat' },
    'พีช': { lie: 'ไม่ได้ไปโรงอาหาร', ev: 'ev-audio' }
};

// ============================================================
// Application State
// ============================================================
let state = {
    group: null,
    unlockedMissions: [],
    unlockedQRs: [],
    anxietyLevel: 100
};

let currentQR = null;
let selectedAnswers = {}; // { qIndex: optIndex }

// ============================================================
// Initialize
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initLoginScreen();
    bindEvents();
});

function initLoginScreen() {
    const grid = document.getElementById('group-grid');
    grid.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'group-btn';
        btn.textContent = i;
        btn.onclick = () => loginGroup(i);
        grid.appendChild(btn);
    }
}

function loginGroup(groupNum) {
    const saved = localStorage.getItem(`CSFilesState_G${groupNum}`);
    if (saved) {
        state = JSON.parse(saved);
    } else {
        state = { group: groupNum, unlockedMissions: [], unlockedQRs: [], anxietyLevel: 100 };
        saveState();
    }

    document.getElementById('display-group-num').textContent = `Group: ${groupNum}`;
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');

    renderMissions();
    renderQRs();
    resetAnxietyBar();
}

function saveState() {
    if (!state.group) return;
    localStorage.setItem(`CSFilesState_G${state.group}`, JSON.stringify(state));
}

function logout() {
    state = { group: null, unlockedMissions: [], unlockedQRs: [], anxietyLevel: 100 };
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
}

// ============================================================
// Navigation
// ============================================================
function bindEvents() {
    document.getElementById('btn-logout').onclick = logout;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = (e) => {
            const target = e.currentTarget.getAttribute('data-target');
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            document.getElementById(target).classList.add('active');
        };
    });

    document.getElementById('btn-unlock-mission').onclick = unlockMission;
    document.getElementById('btn-submit-qr').onclick = checkQR;
    document.querySelector('.close-modal').onclick = closeQRModal;

    document.getElementById('suspect-select').onchange = (e) => {
        const monitor = document.getElementById('anxiety-monitor');
        if (e.target.value) {
            monitor.classList.remove('hidden');
            resetAnxietyBar();
        } else {
            monitor.classList.add('hidden');
        }
    };
    document.getElementById('btn-accuse').onclick = accuseLie;

    document.getElementById('alert-close').onclick = () => {
        document.getElementById('alert-modal').classList.remove('active');
    };

    document.getElementById('judgment-form').onsubmit = submitJudgment;
}

// ============================================================
// Mission Logic
// ============================================================
function unlockMission() {
    const code = document.getElementById('mission-code-input').value;
    const errorEl = document.getElementById('mission-error');

    if (MISSION_CODES[code]) {
        if (!state.unlockedMissions.includes(code)) {
            state.unlockedMissions.push(code);
            saveState();
            renderMissions();
            errorEl.textContent = '';
            showAlert('สำเร็จ!', 'ปลดล็อกไฟล์ลับเรียบร้อยแล้ว');
        } else {
            errorEl.textContent = 'รหัสนี้ถูกปลดล็อกไปแล้ว';
        }
    } else {
        errorEl.textContent = 'รหัสไม่ถูกต้อง!';
    }
    document.getElementById('mission-code-input').value = '';
}

function renderMissions() {
    const list = document.getElementById('unlocked-files-list');
    list.innerHTML = '';

    if (state.unlockedMissions.length === 0) {
        list.innerHTML = '<p class="empty-state">ยังไม่มีไฟล์ถูกปลดล็อก</p>';
        return;
    }

    state.unlockedMissions.forEach(code => {
        MISSION_CODES[code].forEach(file => {
            const el = document.createElement('div');
            el.className = 'file-item doodle-card';
            el.innerHTML = `<h4>🔒 ${file.title}</h4><p>${file.content}</p>`;
            list.appendChild(el);
        });
    });
}

// ============================================================
// QR Logic — Multi-Question
// ============================================================
function checkQR() {
    const input = document.getElementById('qr-code-input').value.toUpperCase().trim();
    const errorEl = document.getElementById('qr-error');

    let qrId = input;
    if (/^\d+$/.test(input)) {
        qrId = `QR-${input.padStart(2, '0')}`;
    }

    if (QR_DATA[qrId]) {
        if (state.unlockedQRs.includes(qrId)) {
            errorEl.textContent = 'คุณเคยสแกน QR นี้แล้ว — ดูเบาะแสได้ด้านล่าง';
            return;
        }
        errorEl.textContent = '';
        openQRQuest(qrId);
    } else {
        errorEl.textContent = 'ไม่พบรหัส QR นี้ในระบบ (ใส่รูปแบบ QR-01 ถึง QR-17)';
    }
    document.getElementById('qr-code-input').value = '';
}

function openQRQuest(qrId) {
    currentQR = qrId;
    selectedAnswers = {};
    const data = QR_DATA[qrId];

    document.getElementById('qr-quest-title').textContent = data.title;
    document.getElementById('qr-quest-question').textContent = data.context;
    document.getElementById('qr-quest-feedback').textContent = '';

    const inputArea = document.getElementById('qr-quest-input-area');
    inputArea.innerHTML = '';

    // Render each question
    data.questions.forEach((qObj, qIndex) => {
        const block = document.createElement('div');
        block.className = 'mc-question-block';

        const qText = document.createElement('p');
        qText.className = 'mc-question-text';
        qText.textContent = `${qIndex + 1}. ${qObj.q}`;
        block.appendChild(qText);

        const optsWrap = document.createElement('div');
        optsWrap.className = 'mc-opts';

        qObj.opts.forEach((opt, optIndex) => {
            const btn = document.createElement('button');
            btn.className = 'mc-opt-btn';
            btn.innerHTML = `<span class="mc-label">${['A','B','C','D'][optIndex]}</span><span class="mc-text">${opt}</span>`;
            btn.onclick = () => selectMCOption(btn, qIndex, optIndex, optsWrap);
            optsWrap.appendChild(btn);
        });

        block.appendChild(optsWrap);
        inputArea.appendChild(block);
    });

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn-primary mc-submit-btn';
    submitBtn.textContent = 'ยืนยันคำตอบทั้งหมด';
    submitBtn.onclick = verifyAllAnswers;
    inputArea.appendChild(submitBtn);

    document.getElementById('qr-quest-modal').classList.add('active');
}

function selectMCOption(btn, qIndex, optIndex, optsWrap) {
    // Deselect all in same question group
    optsWrap.querySelectorAll('.mc-opt-btn').forEach(b => b.classList.remove('selected'));
    // Select this one
    btn.classList.add('selected');
    selectedAnswers[qIndex] = optIndex;

    // Clear error message when user selects
    document.getElementById('qr-quest-feedback').textContent = '';
}

function verifyAllAnswers() {
    const data = QR_DATA[currentQR];
    const feedback = document.getElementById('qr-quest-feedback');
    const totalQ = data.questions.length;

    // Check all questions answered
    if (Object.keys(selectedAnswers).length < totalQ) {
        feedback.textContent = `⚠️ กรุณาตอบให้ครบทุกข้อ (ยังขาด ${totalQ - Object.keys(selectedAnswers).length} ข้อ)`;
        feedback.style.color = 'var(--accent-yellow)';
        return;
    }

    // Check all correct
    let allCorrect = true;
    data.questions.forEach((qObj, qIndex) => {
        if (selectedAnswers[qIndex] !== qObj.a) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        unlockQRClue();
    } else {
        feedback.textContent = '❌ รหัสไม่ถูกต้อง ลองพิจารณาหลักฐานใหม่อีกครั้ง';
        feedback.style.color = 'var(--accent-red)';

        // Reset all selections after a moment
        setTimeout(() => {
            selectedAnswers = {};
            document.querySelectorAll('.mc-opt-btn.selected').forEach(b => b.classList.remove('selected'));
            feedback.textContent = '';
        }, 1800);
    }
}

function unlockQRClue() {
    state.unlockedQRs.push(currentQR);
    saveState();
    renderQRs();
    closeQRModal();
    showAlert('🔓 ปลดล็อกสำเร็จ!', 'คุณได้รับเบาะแสใหม่ เลื่อนดูในรายการเบาะแสได้เลย');
}

function closeQRModal() {
    document.getElementById('qr-quest-modal').classList.remove('active');
    currentQR = null;
    selectedAnswers = {};
}

function renderQRs() {
    document.getElementById('qr-count').textContent = state.unlockedQRs.length;
    const list = document.getElementById('unlocked-clues-list');
    list.innerHTML = '';

    if (state.unlockedQRs.length === 0) {
        list.innerHTML = '<p class="empty-state">ยังไม่พบเบาะแส</p>';
        return;
    }

    const sorted = [...state.unlockedQRs].sort();
    sorted.forEach(id => {
        const clue = QR_DATA[id].clue;
        const el = document.createElement('div');
        el.className = 'clue-item doodle-card';
        el.innerHTML = `<h4>🔍 ${id}</h4><p>${clue}</p>`;
        list.appendChild(el);
    });
}

// ============================================================
// Interrogation Logic
// ============================================================
function resetAnxietyBar() {
    state.anxietyLevel = 100;
    document.getElementById('anxiety-bar-fill').style.width = '100%';
    document.getElementById('accuse-feedback').textContent = '';
}

function accuseLie() {
    const suspect = document.getElementById('suspect-select').value;
    const evidence = document.getElementById('evidence-select').value;
    const feedback = document.getElementById('accuse-feedback');

    if (!suspect || !evidence) return;

    let isCorrectLie = false;
    if (suspect === 'ปังปอน' && evidence === 'ev-log-ip') isCorrectLie = true;
    if (suspect === 'อิง' && evidence === 'ev-line-chat') isCorrectLie = true;
    if (suspect === 'พีช' && evidence === 'ev-audio') isCorrectLie = true;
    if (suspect === 'พีช' && evidence === 'ev-pdf') isCorrectLie = true;
    if (suspect === 'พีช' && evidence === 'ev-cyanide') isCorrectLie = true;

    if (isCorrectLie) {
        const siren = document.getElementById('siren-overlay');
        siren.classList.remove('hidden');
        state.anxietyLevel = Math.max(0, state.anxietyLevel - 35);
        document.getElementById('anxiety-bar-fill').style.width = state.anxietyLevel + '%';
        feedback.className = 'feedback-msg success-msg';
        feedback.textContent = 'จับโกหกสำเร็จ! ผู้ต้องสงสัยเครียดขึ้นแล้ว';
        setTimeout(() => siren.classList.add('hidden'), 1500);
    } else {
        feedback.className = 'feedback-msg error-msg';
        feedback.textContent = 'หลักฐานนี้ไม่ตรงประเด็น!';
        state.anxietyLevel = Math.min(100, state.anxietyLevel + 10);
        document.getElementById('anxiety-bar-fill').style.width = state.anxietyLevel + '%';
    }
}

// ============================================================
// Judgment Logic
// ============================================================
function submitJudgment(e) {
    e.preventDefault();

    const killer = document.getElementById('judge-killer').value;
    const weapon = document.getElementById('judge-weapon').value;
    const evidence = document.getElementById('judge-evidence').value;

    const feedback = document.getElementById('judgment-feedback');
    feedback.classList.remove('hidden');

    if (killer === 'พีช' && weapon === 'ไซยาไนด์' && evidence === 'เสียงกระดิ่ง') {
        feedback.innerHTML = '<div class="doodle-card" style="background:#10B981; color:white;"><h3>🎉 ถูกต้องสมบูรณ์!</h3><p>คุณปิดคดีได้อย่างงดงาม เปิดโปงความลับทั้งหมดสำเร็จ!</p></div>';
    } else {
        feedback.innerHTML = '<div class="doodle-card danger-card"><h3>⚖️ ส่งคำฟ้องแล้ว</h3><p>ศาลได้รับสำนวนของคุณแล้ว รอสตาฟฟ์ประกาศผลตอนจบเกม</p></div>';
    }

    const btn = e.target.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'ฟ้องศาลแล้ว';
    btn.style.opacity = '0.5';
}

// ============================================================
// Utility
// ============================================================
function showAlert(title, message) {
    document.getElementById('alert-title').textContent = title;
    document.getElementById('alert-message').textContent = message;
    document.getElementById('alert-modal').classList.add('active');
}
