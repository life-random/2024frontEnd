// JS 객체 정의하기 (리터럴 객체)
let st = {
    name: "홍길동",
    "사는 주소": "수영구",
    age: 20,
    code: 202412345,
    dept: "컴퓨터소프트웨어과",
    생년월일: "020815",
    subject: {
        "교양 과목": ["일본어", "영어", "미술심리치료"],
        전공과목: ["자바", "프론트"],
    }
}

console.log(st.subject["교양 과목"][1]);
console.log(st.subject.전공과목[1]);