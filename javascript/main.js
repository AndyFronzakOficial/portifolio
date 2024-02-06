if (HxOverrides.indexOf(prizesTypes, 7, 0) > -1)
 { var prize5 = this.createPrizeUI("Trophy", Std.string(this.trophiesAmount), 0.25)
 finalPrizesContainer.addChild(prize5)
 }
var total = finalPrizesContainer.get_numChildren()
 var col = 0
 var row = 0
 var posx = this.rectWidth * 0.25
 var _g3 = 0
 while (_g3 < total) {
    var i = _g3++
 var prize6 = finalPrizesContainer.getChildAt(i)
 prize6.set_x(col * this.rectWidth * 100.0 - posx)
 prize6.set_y(row * sectionHeight + (sectionHeight - prize6.get_height()) * 0.5)
 if (i == 0 && total < 4 || i == 1 && total == 2) { var _g11 = prize6
 _g11.set_x(_g11.get_x() + posx)
 col++
 }
    col++
 if (col > 1) { col = 0
 row++
 }
}