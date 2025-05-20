import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const MAPPING = {
    "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  gearshape: "settings",
  plus: "add",
  paperplane: "send"
}

export function IconSymbol({name, size = 24, color = "#007AFF", style, weight = "regular"}) {
    return (
        <MaterialIcons
            color={color}
            size={size}
            name={MAPPING[name]}
            style={style}
            />
    )

}