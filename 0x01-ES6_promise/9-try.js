export default function guardrail(mathfunction) {
  const toRet = [];
  try {
    toRet.push(mathfunction());
  } catch (err) {
    toRet.push(`${err}`);
  }
  toRet.push('Guardrail was processed');
  return toRet;
}
