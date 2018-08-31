type CompareToReturnType = 0 | -1 | 1;

declare interface Number {
  compareTo(otherNum: Number): CompareToReturnType;
}

Number.prototype.compareTo = function(otherNum: Number) {
  return this > otherNum ? 1 : this < otherNum ? -1 : 0;
};

declare interface String {
  compareTo(otherString: String): CompareToReturnType;
}

String.prototype.compareTo = function(otherString: String) {
  return this > otherString ? 1 : this < otherString ? -1 : 0;
};
