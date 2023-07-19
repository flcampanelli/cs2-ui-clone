import React, { useEffect } from "react";

import Cs2HeaderBg from "../../assets/images/cs2-header-bg.svg";
import LogoCsFullBlk from "../../assets/images/logo-cs-full-blk.svg";
import HeaderCtt from "../../assets/images/header-ctt.png";
import LogoCs2Header from "../../assets/images/logo-cs2-header.svg";

import OverBackLongS2 from "../../assets/images/overpass_back_long_s2.jpg";
import OverBackLongS1 from "../../assets/images/overpass_back_long_s1.jpg";
import OverLowerTunnelS2 from "../../assets/images/overpass_lower_tunnel_s2.jpg";
import OverLowerTunnelS1 from "../../assets/images/overpass_lower_tunnel_s1.jpg";
import OverToiletsS2 from "../../assets/images/overpass_toilets_s2.jpg";
import OverToiletsS1 from "../../assets/images/overpass_toilets_s1.jpg";
import OverVanVistaS2 from "../../assets/images/overpass_van_vista_s2.jpg";
import OverVanVistaS1 from "../../assets/images/overpass_van_vista_s1.jpg";

import NukeDefaultS2 from "../../assets/images/nuke_default_s2.jpg";
import NukeDefaultS1 from "../../assets/images/nuke_default_s1.jpg";
import NukeRampS2 from "../../assets/images/nuke_ramp_s2.jpg";
import NukeRampS1 from "../../assets/images/nuke_ramp_s1.jpg";
import NukeTs2 from "../../assets/images/nuke_t_s2.jpg";
import NukeTs1 from "../../assets/images/nuke_t_s1.jpg";
import NukeBackhallS2 from "../../assets/images/nuke_backhall_s2.jpg";
import NukeBackhallS1 from "../../assets/images/nuke_backhall_s1.jpg";

import Dust2BackPlatS2 from "../../assets/images/dust2_back_plat_s2.jpg";
import Dust2BackPlatS1 from "../../assets/images/dust2_back_plat_s1.jpg";
import Dust2BlueS2 from "../../assets/images/dust2_blue_s2.jpg";
import Dust2BlueS1 from "../../assets/images/dust2_blue_s1.jpg";
import Dust2CtRampS2 from "../../assets/images/dust2_ct_ramp_s2.jpg";
import Dust2CtRampS1 from "../../assets/images/dust2_ct_ramp_s1.jpg";
import Dust2DoubleDoorsS2 from "../../assets/images/dust2_double_doors_s2.jpg";
import Dust2DoubleDoorsS1 from "../../assets/images/dust2_double_doors_s1.jpg";

const PreloadImages: React.FC = () => {
  const imageSources: string[] = [
    Cs2HeaderBg,
    LogoCsFullBlk,
    HeaderCtt,
    LogoCs2Header,

    OverBackLongS2,
    OverBackLongS1,
    OverLowerTunnelS2,
    OverLowerTunnelS1,
    OverToiletsS2,
    OverToiletsS1,
    OverVanVistaS2,
    OverVanVistaS1,

    NukeDefaultS2,
    NukeDefaultS1,
    NukeRampS2,
    NukeRampS1,
    NukeTs2,
    NukeTs1,
    NukeBackhallS2,
    NukeBackhallS1,

    Dust2BackPlatS2,
    Dust2BackPlatS1,
    Dust2BlueS2,
    Dust2BlueS1,
    Dust2CtRampS2,
    Dust2CtRampS1,
    Dust2DoubleDoorsS2,
    Dust2DoubleDoorsS1,
  ];

  useEffect(() => {
    const preloadImages: HTMLImageElement[] = [];

    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      preloadImages.push(img);
    });

    return () => {
      preloadImages.forEach((img) => img.remove());
    };
  }, [imageSources]);

  return null;
};

export default PreloadImages;
