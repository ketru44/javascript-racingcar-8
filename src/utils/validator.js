export function validateCarNameRule(names) {
  names.forEach(n => {
    if(n.length > 5) throw new Error("[ERROR] : 자동차 명은 5자 이하여야 합니다.")
  });
}