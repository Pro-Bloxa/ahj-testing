export default function checkCard(code) {
  if (code.startsWith("22")) {
    return "mir";
  }
  if (code.startsWith("4")) {
    return "visa";
  }
  if (code.startsWith("34") || code.startsWith("37")) {
    return "american-express";
  }
  if (code.startsWith("60")) {
    return "discover";
  }
  if (code.startsWith("31") || code.startsWith("35")) {
    return "jcb";
  }
  if (code.startsWith("30") || code.startsWith("36") || code.startsWith("38")) {
    return "diners-club";
  }
  if (
    code.startsWith("51") ||
    code.startsWith("52") ||
    code.startsWith("53") ||
    code.startsWith("54") ||
    code.startsWith("55")
  ) {
    return "mastercard";
  }
  return false;
}
