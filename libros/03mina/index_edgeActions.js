/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("portada").stop();
         
         //sym.getSymbol("epigrafo").play(sym.getPosition());
         sym.getSymbol("epigrafo").$("gato_ep")[0].currentTime = 0;
         sym.getSymbol("epigrafo").$("gato_ep")[0].pause();
         sym.getSymbol("epigrafo").$("Texto_epigrafe").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getSymbol("epigrafo").play(0);
         sym.getSymbol("pag1").stop();
         
         sym.getSymbol("pag1").$("voz_01")[0].pause();
         sym.getSymbol("epigrafo").$("Texto_epigrafe").hide();
         
         sym.getSymbol("pag1").$("S02_ronroneo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4492, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.getSymbol("epigrafo").stop();
         
         sym.getSymbol("pag1").$("hint01").hide(); 
         sym.getSymbol("pag1").$("g_01").hide(); 
         sym.getSymbol("pag1").$("luna_01").hide();
         sym.getSymbol("pag1").$("gato_parpados01").hide();
         sym.getSymbol("pag1").$("tx1_01").hide();
         sym.getSymbol("pag1").$("tx2_01").hide();
         
         sym.getSymbol("epigrafo").$("voz_16")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("portada").play(0);
         sym.getSymbol("epigrafo").stop();
         
         sym.getSymbol("epigrafo").$("voz_16")[0].pause();
         
         sym.$("Mina_musica")[0].play();
         sym.$("Mina_musica")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6990, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.getSymbol("pag1").stop();
         
         sym.getSymbol("pag2").$("tx_02").hide();
         
         sym.getSymbol("pag1").$("voz_01")[0].pause();
         sym.getSymbol("pag1").$("S02_ronroneo")[0].pause();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_der}", "click", function(sym, e) {
         sym.play();
         sym.getSymbol("btn_der").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_epi}", "click", function(sym, e) {
         sym.getSymbol("btn_epi").play();
         sym.play("portada");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_1}", "click", function(sym, e) {
         sym.getSymbol("btn_1").play();
         sym.play("epigrafo");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.getSymbol("pag1").play(0);
         sym.getSymbol("pag2").stop();
         
         sym.getSymbol("pag1").$("tx1_01").show();
         sym.getSymbol("pag1").$("gato_parpados01").hide();
         sym.getSymbol("pag1").$("hint01").hide();
         
         sym.getSymbol("pag2").$("voz_02")[0].pause();
         sym.getSymbol("pag2").$("S03_maullidosuave2")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_2}", "click", function(sym, e) {
         sym.getSymbol("btn_2").play();
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9491, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.getSymbol("pag2").stop();
         
         sym.getSymbol("pag3").getSymbol("vestido_03").stop(0);
         sym.getSymbol("pag3").$("tx1_03").hide();
         sym.getSymbol("pag3").$("tx2_03").hide();
         sym.getSymbol("pag3").$("luciernagas_03").hide();
         
         sym.getSymbol("pag2").$("voz_02")[0].pause();
         sym.getSymbol("pag2").$("S03_maullidosuave2")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.getSymbol("pag2").play(0);
         sym.getSymbol("pag3").stop();
         
         sym.getSymbol("pag2").$("tx_02").show();
         
         sym.getSymbol("pag3").$("voz_03")[0].pause();
         sym.getSymbol("pag3").$("S04_viento")[0].pause(); 
         sym.getSymbol("pag3").$("S04_luciernagas")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.getSymbol("pag3").play(0);
         sym.getSymbol("pag4").getSymbol("estrellas").stop();
         sym.getSymbol("pag4").stop();
         
         sym.getSymbol("pag3").$("tx1_03").show();
         sym.getSymbol("pag3").$("tx2_03").show();
         sym.getSymbol("pag3").$("luciernagas_03").show();
         
         sym.getSymbol("pag4").$("voz_04")[0].pause();
         sym.getSymbol("pag4").$("S05_mar")[0].pause();
         sym.getSymbol("pag4").$("S05_campanas")[0].pause();
         sym.getSymbol("pag4").getSymbol("estrellas").$("S04_maullido")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         
         sym.getSymbol("pag3").stop();
         
         sym.getSymbol("pag4").$("tx_01_04").hide();
         sym.getSymbol("pag4").$("tx_02_04").hide();
         sym.getSymbol("pag4").$("parpados_pinguinos").hide();
         sym.getSymbol("pag4").$("glow_04").hide();
         
         sym.getSymbol("pag3").$("voz_03")[0].pause();
         sym.getSymbol("pag3").$("S04_viento")[0].pause(); 
         sym.getSymbol("pag3").$("S04_luciernagas")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_3}", "click", function(sym, e) {
         sym.getSymbol("btn_3").play();
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_4}", "click", function(sym, e) {
         sym.getSymbol("btn_4").play();
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         sym.getSymbol("pag5").stop(0);
         sym.getSymbol("pag4").getSymbol("estrellas").stop();
         sym.getSymbol("pag4").stop();
         
         sym.getSymbol("pag5").$("Texto_05").hide();
         sym.getSymbol("pag5").$("glow_05").hide();
         
         sym.getSymbol("pag4").$("voz_04")[0].pause();
         sym.getSymbol("pag4").$("S05_mar")[0].pause();
         sym.getSymbol("pag4").$("S05_campanas")[0].pause();
         sym.getSymbol("pag4").getSymbol("estrellas").$("S04_maullido")[0].pause();
         
         sym.getSymbol("pag5").$("S5_final")[0].currentTime = 0;
         sym.getSymbol("pag5").$("S5_final")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14491, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.getSymbol("pag4").play(0);
         sym.getSymbol("pag4").getSymbol("estrellas").stop(0);
         sym.getSymbol("pag5").stop();
         
         sym.getSymbol("pag4").$("tx_01_04").show();
         sym.getSymbol("pag4").$("tx_02_04").show();
         
         sym.getSymbol("pag5").$("voz_05")[0].pause();
         sym.getSymbol("pag5").$("S06_viento")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_5}", "click", function(sym, e) {
         sym.getSymbol("btn_5").play();
         sym.play("4");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.getSymbol("pag5").play(0);
         sym.getSymbol("pag6").stop();
         
         sym.getSymbol("pag5").$("Texto_05").show();
         sym.getSymbol("pag5").$("glow_05").hide();
         
         sym.getSymbol("pag6").$("voz_06")[0].pause();
         sym.getSymbol("pag6").getSymbol("ojos_06").$("S07_campaneoalegre")[0].pause();
         sym.getSymbol("pag6").getSymbol("ojos_06").$("S07_risita")[0].pause();
         
         sym.getSymbol("pag5").$("S5_final")[0].currentTime = 0;
         sym.getSymbol("pag5").$("S5_final")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         
         sym.getSymbol("pag5").stop();
         
         sym.getSymbol("pag6").$("Titulo_06").hide();
         sym.getSymbol("pag6").$("Texto_06").hide();
         sym.getSymbol("pag6").$("FondoCompleto_06").hide();
         sym.getSymbol("pag6").$("ojos_06").hide();
         sym.getSymbol("pag6").$("Fondo_Vacio_06").show();
         
         sym.getSymbol("pag5").$("voz_05")[0].pause();
         sym.getSymbol("pag5").$("S06_viento")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16960, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_6}", "click", function(sym, e) {
         sym.getSymbol("btn_6").play();
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         
         sym.getSymbol("pag6").play(0);
         sym.getSymbol("pag7").stop();
         
         sym.getSymbol("pag6").$("Titulo_06").show();
         sym.getSymbol("pag6").$("Texto_06").show();
         sym.getSymbol("pag6").$("FondoCompleto_06").show();
         sym.getSymbol("pag6").$("ojos_06").show();
         
         sym.getSymbol("pag7").$("voz_07")[0].pause();
         sym.getSymbol("pag7").getSymbol("GD5").$("S08_radar")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19455, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         // insert code here
         sym.getSymbol("pag6").stop();
         
         sym.getSymbol("pag7").$("Titulo_07").hide();
         sym.getSymbol("pag7").$("Texto_07").hide();
         
         sym.getSymbol("pag7").getSymbol("GI1").$("GI1_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI2").$("GI2_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI3").$("GI3_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI4").$("GI4_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI5").$("GI5_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD1").$("GD1-glow").hide();
         sym.getSymbol("pag7").getSymbol("GD2").$("GD2_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD3").$("GD3_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD4").$("GD4_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD5").$("GD5_glow").hide();
         
         sym.getSymbol("pag6").$("voz_06")[0].pause();
         sym.getSymbol("pag6").getSymbol("ojos_06").$("S07_campaneoalegre")[0].pause();
         sym.getSymbol("pag6").getSymbol("ojos_06").$("S07_risita")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_7}", "click", function(sym, e) {
         sym.getSymbol("btn_7").play();
         sym.play("6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         sym.getSymbol("pag7").play(0);
         sym.getSymbol("pag8").stop();
         
         sym.getSymbol("pag7").$("Titulo_07").show();
         sym.getSymbol("pag7").$("Texto_07").show();
         sym.getSymbol("pag7").getSymbol("GI1").$("GI1_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI2").$("GI2_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI3").$("GI3_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI4").$("GI4_glow").hide();
         sym.getSymbol("pag7").getSymbol("GI5").$("GI5_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD1").$("GD1-glow").hide();
         sym.getSymbol("pag7").getSymbol("GD2").$("GD2_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD3").$("GD3_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD4").$("GD4_glow").hide();
         sym.getSymbol("pag7").getSymbol("GD5").$("GD5_glow").hide();
         
         
         sym.getSymbol("pag8").$("voz_08")[0].pause();
         sym.getSymbol("pag8").$("S08_viento")[0].pause();
         sym.getSymbol("pag8").$("S09_aleteo")[0].pause();
         sym.getSymbol("pag8").$("S09_canto")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.getSymbol("pag7").stop();
         
         sym.getSymbol("pag8").$("Titulo_08").hide();
         sym.getSymbol("pag8").$("paj1").hide();
         sym.getSymbol("pag8").$("paj2").hide();
         sym.getSymbol("pag8").$("paj3").hide();
         sym.getSymbol("pag8").$("gato_08").hide();
         
         sym.getSymbol("pag7").$("voz_07")[0].pause();
         sym.getSymbol("pag7").getSymbol("GD5").$("S08_radar")[0].pause();
         
         sym.getSymbol("pag8").$("S8_video")[0].currentTime = 0;
         sym.getSymbol("pag8").$("S8_video")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_8}", "click", function(sym, e) {
         sym.getSymbol("btn_8").play();
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.getSymbol("pag8").play(0);
         sym.getSymbol("pag9").stop();
         
         sym.getSymbol("pag8").$("Titulo_08").show();
         
         sym.getSymbol("pag9").$("voz_09")[0].pause();
         sym.getSymbol("pag9").$("S10_acierto")[0].pause();
         
         sym.getSymbol("pag8").$("S8_video")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         sym.getSymbol("pag9").getSymbol("glow_tejas").stop(0);
         sym.getSymbol("pag8").stop();
         
         sym.getSymbol("pag9").$("Texto_09").hide();
         sym.getSymbol("pag9").$("T_Negras_09").show();
         
         sym.getSymbol("pag8").$("voz_08")[0].pause();
         sym.getSymbol("pag8").$("S08_viento")[0].pause();
         sym.getSymbol("pag8").$("S09_aleteo")[0].pause();
         sym.getSymbol("pag8").$("S09_canto")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24491, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_9}", "click", function(sym, e) {
         sym.getSymbol("btn_9").play();
         sym.play("8");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_11}", "click", function(sym, e) {
         sym.getSymbol("btn_11").play();
         sym.play("9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_12}", "click", function(sym, e) {
         sym.getSymbol("btn_12").play();
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_13}", "click", function(sym, e) {
         sym.getSymbol("btn_13").play();
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_14}", "click", function(sym, e) {
         sym.getSymbol("btn_14").play();
         sym.play("13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_15}", "click", function(sym, e) {
         sym.getSymbol("btn_15").play();
         sym.play("14");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26500, function(sym, e) {
         sym.getSymbol("pag9").play(0);
         sym.getSymbol("pag9").getSymbol("glow_tejas").stop(0);
         sym.getSymbol("pag11").stop();
         sym.getSymbol("pag11").getSymbol("gatoblanco").stop();
         sym.getSymbol("pag11").getSymbol("gatonegro").stop();
         
         sym.getSymbol("pag9").$("Texto_09").show();
         
         sym.getSymbol("pag11").$("voz_11")[0].pause();
         sym.getSymbol("pag11").$("S11_helicoptero")[0].pause();
         sym.getSymbol("pag11").$("S11_canto")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.getSymbol("pag9").stop();
         
         sym.getSymbol("pag11").$("Texto_11").hide();
         sym.getSymbol("pag11").$("p1_11").hide();
         sym.getSymbol("pag11").$("p2_11").hide();
         sym.getSymbol("pag11").$("p3_11").hide();
         sym.getSymbol("pag9").$("voz_09")[0].pause();
         sym.getSymbol("pag9").$("S10_acierto")[0].pause();
         audio=0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.getSymbol("pag11").play(0);
         sym.getSymbol("pag12").stop();
         
         sym.getSymbol("pag11").$("Texto_11").show();
         
         sym.getSymbol("pag11").$("p1_11").hide();
         sym.getSymbol("pag11").$("p2_11").hide();
         sym.getSymbol("pag11").$("p3_11").hide();
         
         sym.getSymbol("pag12").$("voz_12")[0].pause();
         sym.getSymbol("pag12").$("S12_maullidosuave")[0].pause();
         sym.getSymbol("pag12").$("S12_maullidosuave2")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         
         sym.getSymbol("pag11").stop();
         sym.getSymbol("pag11").getSymbol("gatoblanco").stop();
         sym.getSymbol("pag11").getSymbol("gatonegro").stop();
         
         sym.getSymbol("pag12").$("Texto_12").hide();
         sym.getSymbol("pag12").$("Titulo_12").hide();
         sym.getSymbol("pag12").$("bermunda_i").hide();
         sym.getSymbol("pag12").$("bermuda_d").hide();
         sym.getSymbol("pag12").$("Tendedero_12").hide();
         sym.getSymbol("pag12").$("gatoi_12").hide();
         sym.getSymbol("pag12").$("gatod_12").hide();
         
         sym.getSymbol("pag11").$("voz_11")[0].pause();
         sym.getSymbol("pag11").$("S11_helicoptero")[0].pause();
         sym.getSymbol("pag11").$("S11_canto")[0].pause();
         audio=0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29491, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31500, function(sym, e) {
         sym.getSymbol("pag12").play(0);
         sym.getSymbol("pag13").stop();
         
         sym.getSymbol("pag12").$("Texto_12").show();
         sym.getSymbol("pag12").$("Titulo_12").show();
         sym.getSymbol("pag12").$("bermunda_i").show();
         sym.getSymbol("pag12").$("bermuda_d").show();
         sym.getSymbol("pag12").$("Tendedero_12").show();
         sym.getSymbol("pag12").$("gatoi_12").show();
         sym.getSymbol("pag12").$("gatod_12").show();
         
         sym.getSymbol("pag13").$("voz_13")[0].pause();
         sym.getSymbol("pag13").getSymbol("olas").$("S14_mar")[0].pause();
         sym.getSymbol("pag13").getSymbol("olas").$("S14_olas")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         // insert code here
         sym.getSymbol("pag12").stop();
         sym.getSymbol("pag13").getSymbol("olas").stop(0);
         
         sym.getSymbol("pag13").$("Texto_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_AbajoAzul_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_AtrasAzul_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_2Azul_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_GrandeAzul_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_1Azul_13").hide();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_PatitaAzul_13").hide();
         
         sym.getSymbol("pag12").$("voz_12")[0].pause();
         sym.getSymbol("pag12").$("S12_maullidosuave")[0].pause();
         sym.getSymbol("pag12").$("S12_maullidosuave2")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.getSymbol("pag13").play(0);
         sym.getSymbol("pag14").stop();
         sym.getSymbol("pag14").getSymbol("ojoytronco_14").stop();
         sym.getSymbol("pag14").getSymbol("narizypata_14").stop();
         
         
         sym.getSymbol("pag13").$("Texto_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_Patita_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_AbajoAzul_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_AtrasAzul_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_2Azul_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_GrandeAzul_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_1Azul_13").show();
         sym.getSymbol("pag13").getSymbol("olas").$("Ola_PatitaAzul_13").show();
         
         sym.getSymbol("pag14").$("voz_14")[0].pause();
         sym.getSymbol("pag14").getSymbol("narizypata_14").$("S15_suspiro2")[0].pause();
         sym.getSymbol("pag14").$("S14_ronroneo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34500, function(sym, e) {
         
         sym.getSymbol("pag13").stop();
         
         sym.getSymbol("pag14").$("Texto_14").hide();
         
         sym.getSymbol("pag13").$("voz_13")[0].pause();
         sym.getSymbol("pag13").getSymbol("olas").$("S14_mar")[0].pause();
         sym.getSymbol("pag13").getSymbol("olas").$("S14_olas")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34493, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36500, function(sym, e) {
         
         sym.getSymbol("pag14").play(0);
         sym.getSymbol("pag15").stop();
         sym.getSymbol("pag15").getSymbol("espiral_15").stop();
         
         sym.getSymbol("pag14").$("Texto_14").show();
         
         sym.getSymbol("pag15").$("voz_15")[0].pause();
         sym.getSymbol("pag15").$("S15_ronroneo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         // insert code here
         sym.getSymbol("pag14").stop();
         sym.getSymbol("pag14").getSymbol("ojoytronco_14").stop();
         sym.getSymbol("pag14").getSymbol("narizypata_14").stop();
         
         sym.getSymbol("pag15").$("FondoTodo_15").hide();
         sym.getSymbol("pag15").$("gatos_15").hide();
         sym.getSymbol("pag15").$("Titulo_15").hide();
         sym.getSymbol("pag15").$("Texto_15").hide();
         
         sym.getSymbol("pag14").$("voz_14")[0].pause();
         sym.getSymbol("pag14").getSymbol("narizypata_14").$("S15_suspiro2")[0].pause();
         sym.getSymbol("pag14").$("S14_ronroneo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36989, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.getSymbol("pag15").play(0);
         
         sym.getSymbol("pag15").$("FondoTodo_15").hide();
         sym.getSymbol("pag15").$("gatos_15").hide();
         sym.getSymbol("pag15").$("Titulo_15").show();
         sym.getSymbol("pag15").$("Texto_15").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39488, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39500, function(sym, e) {
         
         sym.getSymbol("pag15").stop();
         
         sym.getSymbol("pag15").$("voz_15")[0].pause();
         sym.getSymbol("pag15").$("S15_ronroneo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         // insert code here
         sym.play("portada");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var inicio=0;
         var audio=0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         
         sym.$("Mina_musica")[0].pause();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'portada'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("portada_inside").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.getSymbol("creditos").play(0);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6570, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         sym.getSymbol("tendedero").play(0);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11320, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
          
         sym.getSymbol("tendedero").$("izq_tendedero").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getSymbol("portada_inside").play(0);
         sym.getSymbol("creditos").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.getSymbol("portada_inside").play(0);
         sym.getSymbol("tendedero").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getSymbol("creditos").stop(0);

      });
      //Edge binding end

   })("portada");
   //Edge symbol end:'portada'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'portada_inside'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_leer}", "click", function(sym, e) {
         sym.getComposition().getStage().play("epigrafoinicio");
         sym.getComposition().getStage().$("Cambio_de_Pgina")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function(sym, e) {
         sym.getSymbol("leche_p").play();
         sym.getComposition().getStage().getSymbol("portada").play("creditosinicio");
         sym.getComposition().getStage().$("Cambio_de_Pgina")[0].play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_tendedero}", "click", function(sym, e) {
         sym.getSymbol("canasta_p").play();
         sym.getComposition().getStage().getSymbol("portada").play("tendederoinicio");
         sym.getComposition().getStage().$("Cambio_de_Pgina")[0].play();
         sym.stop();
         

      });
      //Edge binding end

   })("portada_inside");
   //Edge symbol end:'portada_inside'

   //=========================================================
   
   //Edge symbol: 'creditos'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_home2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").play("portadainicio");
         sym.getComposition().getStage().$("Cambio_de_Pgina")[0].play();
         sym.$("Cat_Purring")[0].pause();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.$("Cat_Purring")[0].play();
         sym.$("Cat_Purring")[0].currentTime = 0;

      });
      //Edge binding end

   })("creditos");
   //Edge symbol end:'creditos'

   //=========================================================
   
   //Edge symbol: 'tendedero'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_home2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").play("portadainicio2");
         sym.$("voz_17")[0].pause();
         sym.$("Cat_Purring2")[0].pause();
         sym.getComposition().getStage().$("Cambio_de_Pgina")[0].play();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${der_tendedero}", "click", function(sym, e) {
         sym.getSymbol("der_tendedero").play();
         sym.getSymbol("tendedero_textos").play();
         sym.getComposition().getStage().$("Click")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${izq_tendedero}", "click", function(sym, e) {
         sym.getSymbol("izq_tendedero").play();
         sym.getSymbol("tendedero_textos").playReverse();
         sym.getComposition().getStage().$("Click")[0].play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.$("voz_17")[0].play();
         sym.$("voz_17")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.getSymbol("tendedero_textos").play("1");
         sym.$("Cat_Purring2")[0].play();
         sym.$("Cat_Purring2")[0].currentTime = 0;

      });
      //Edge binding end

   })("tendedero");
   //Edge symbol end:'tendedero'

   //=========================================================
   
   //Edge symbol: 'epigrafo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         
         sym.$("voz_16")[0].play();
         sym.$("voz_16")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         
         sym.$("Texto_epigrafe").show();

      });
      //Edge binding end

   })("epigrafo");
   //Edge symbol end:'epigrafo'

   //=========================================================
   
   //Edge symbol: 'btn_der'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_der");
   //Edge symbol end:'btn_der'

   //=========================================================
   
   //Edge symbol: 'btn_epi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_epi");
   //Edge symbol end:'btn_epi'

   //=========================================================
   
   //Edge symbol: 'izq_tendedero'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("izq_tendedero");
   //Edge symbol end:'izq_tendedero'

   //=========================================================
   
   //Edge symbol: 'der_tendedero'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("der_tendedero");
   //Edge symbol end:'der_tendedero'

   //=========================================================
   
   //Edge symbol: 'pag1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getSymbol("gato_parpados01").play("inicio");
         sym.$("gato_parpados01").show();
         sym.getSymbol("hint01").play("inicio");
         sym.$("hint01").show();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gato01}", "click", function(sym, e) {
         sym.getSymbol("hint01").stop(); 
         sym.$("hint01").hide();
         
         sym.$("S02_ronroneo")[0].play();
         sym.$("S02_ronroneo")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         sym.$("luna_01").show();
         sym.$("g_01").show();
         sym.$("hint01").show();
         sym.$("gato_parpados01").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_01")[0].play();
         sym.$("voz_01")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         
         sym.$("tx2_01").show();

      });
      //Edge binding end

   })("pag1");
   //Edge symbol end:'pag1'

   //=========================================================
   
   //Edge symbol: 'gato_parpados01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("inicio");

      });
      //Edge binding end

   })("gato_parpados01");
   //Edge symbol end:'gato_parpados01'

   //=========================================================
   
   //Edge symbol: 'hint01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("hint01");
   //Edge symbol end:'hint01'

   //=========================================================
   
   //Edge symbol: 'pag2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.getSymbol("gato1_02").play("parpadeo");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_luna}", "click", function(sym, e) {
         sym.play("continua");
         sym.getSymbol("gato2_02").play("cambio");
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9492, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getSymbol("gato_papel02").play("glow");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gatos}", "click", function(sym, e) {
         sym.getSymbol("gato_papel02").play("continua");
         
         sym.$("S03_maullidosuave2")[0].play();
         sym.$("S03_maullidosuave2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 687, function(sym, e) {
         
         sym.$("voz_02")[0].play();
         sym.$("voz_02")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         sym.getSymbol("gato2_02").play("glow");
         sym.getSymbol("gato2_02").$("luna_glow_02").show();
         

      });
      //Edge binding end

   })("pag2");
   //Edge symbol end:'pag2'

   //=========================================================
   
   //Edge symbol: 'gato_papel02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("gato_papel02");
   //Edge symbol end:'gato_papel02'

   //=========================================================
   
   //Edge symbol: 'gato1_02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("gato1_02");
   //Edge symbol end:'gato1_02'

   //=========================================================
   
   //Edge symbol: 'gato2_02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("gato2_02");
   //Edge symbol end:'gato2_02'

   //=========================================================
   
   //Edge symbol: 'pag3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48000, function(sym, e) {
         
         sym.getSymbol("luciernagas_03").play("inicio");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_luciernagas}", "click", function(sym, e) {
         sym.getSymbol("luciernagas_03").play("color");
         sym.play("color");
         
         sym.$("S04_luciernagas")[0].play();
         sym.$("S04_luciernagas")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.getSymbol("vestido_03").play("mov");
         
         sym.$("S04_viento")[0].play();
         sym.$("S04_viento")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_03")[0].play();
         sym.$("voz_03")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag3");
   //Edge symbol end:'pag3'

   //=========================================================
   
   //Edge symbol: 'vestido_03'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play("mov");

      });
      //Edge binding end

   })("vestido_03");
   //Edge symbol end:'vestido_03'

   //=========================================================
   
   //Edge symbol: 'luciernagas_03'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.play("hint");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("luciernagas_03");
   //Edge symbol end:'luciernagas_03'

   //=========================================================
   
   //Edge symbol: 'pag4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.getSymbol("colas_04").play("inicio");
         
         sym.$("S05_mar")[0].play();
         sym.$("S05_mar")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59609, function(sym, e) {
         sym.$("glow_04").show();
         sym.getSymbol("glow_04").play("inicio");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gatos}", "click", function(sym, e) {
         sym.getSymbol("glow_04").stop();
         sym.$("glow_04").hide();
         sym.getSymbol("estrellas").play("inicio");
         
         sym.$("S05_campanas")[0].play();
         sym.$("S05_campanas")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_04")[0].play();
         sym.$("voz_04")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.$("parpados_pinguinos").show();
         sym.getSymbol("parpados_pinguinos").play("inicio");

      });
      //Edge binding end

   })("pag4");
   //Edge symbol end:'pag4'

   //=========================================================
   
   //Edge symbol: 'parpados_pinguinos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("parpados_pinguinos");
   //Edge symbol end:'parpados_pinguinos'

   //=========================================================
   
   //Edge symbol: 'estrellas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         
         sym.$("S04_maullido")[0].play();
         sym.$("S04_maullido")[0].currentTime = 0;

      });
      //Edge binding end

   })("estrellas");
   //Edge symbol end:'estrellas'

   //=========================================================
   
   //Edge symbol: 'colas_04'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("colas_04");
   //Edge symbol end:'colas_04'

   //=========================================================
   
   //Edge symbol: 'glow_04'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("glow_04");
   //Edge symbol end:'glow_04'

   //=========================================================
   
   //Edge symbol: 'pag5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.getSymbol("ojos_05").play(); 
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gato05}", "click", function(sym, e) {
         sym.getSymbol("glow_05").stop();
         sym.play("continua");
         
         sym.$("S06_viento")[0].play();
         sym.$("S06_viento")[0].currentTime = 2;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_05")[0].play();
         sym.$("voz_05")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.$("S5_final")[0].currentTime = 0;
         sym.$("S5_final")[0].play();
         
         

      });
      //Edge binding end

   })("pag5");
   //Edge symbol end:'pag5'

   //=========================================================
   
   //Edge symbol: 'ojos_05'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag5").$("glow_05").show();
         sym.getComposition().getStage().getSymbol("pag5").getSymbol("glow_05").play("glow");
         

      });
      //Edge binding end

   })("ojos_05");
   //Edge symbol end:'ojos_05'

   //=========================================================
   
   //Edge symbol: 'glow_05'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

   })("glow_05");
   //Edge symbol end:'glow_05'

   //=========================================================
   
   //Edge symbol: 'pag6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_gato1}", "click", function(sym, e) {
         sym.getSymbol("ojos_06").play("gato1");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gato2}", "click", function(sym, e) {
         sym.getSymbol("ojos_06").play("gato2");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65000, function(sym, e) {
         // insert code here
         sym.getSymbol("ojos_06").play("inicio");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_06")[0].play();
         sym.$("voz_06")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag6");
   //Edge symbol end:'pag6'

   //=========================================================
   
   //Edge symbol: 'ojos_06'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3648, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10074, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("S07_risita")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6074, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         
         sym.$("S07_campaneoalegre")[0].play();
         sym.$("S07_campaneoalegre")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6574, function(sym, e) {
         
         sym.$("S07_risita")[0].play();
         sym.$("S07_risita")[0].currentTime = 1;
         

      });
      //Edge binding end

   })("ojos_06");
   //Edge symbol end:'ojos_06'

   //=========================================================
   
   //Edge symbol: 'pag7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${GD1}", "click", function(sym, e) {
         sym.getSymbol("GD1").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GD2}", "click", function(sym, e) {
         sym.getSymbol("GD2").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GD3}", "click", function(sym, e) {
         sym.getSymbol("GD3").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GD4}", "click", function(sym, e) {
         sym.getSymbol("GD4").play("mov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GD5}", "click", function(sym, e) {
         sym.getSymbol("GD5").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GI5}", "click", function(sym, e) {
         sym.getSymbol("GI5").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GI3}", "click", function(sym, e) {
         sym.getSymbol("GI3").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GI4}", "click", function(sym, e) {
         sym.getSymbol("GI4").play("mov");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.getSymbol("GI1").$("GI1_glow").show();
         sym.getSymbol("GI2").$("GI2_glow").show();
         sym.getSymbol("GI3").$("GI3_glow").show();
         sym.getSymbol("GI4").$("GI4_glow").show();
         sym.getSymbol("GI5").$("GI5_glow").show();
         sym.getSymbol("GD1").$("GD1-glow").show();
         sym.getSymbol("GD2").$("GD2_glow").show();
         sym.getSymbol("GD3").$("GD3_glow").show();
         sym.getSymbol("GD4").$("GD4_glow").show();
         sym.getSymbol("GD5").$("GD5_glow").show();
         
         sym.getSymbol("GI1").play("glow");
         sym.getSymbol("GI2").play("glow");
         sym.getSymbol("GI3").play("glow");
         sym.getSymbol("GI4").play("glow");
         sym.getSymbol("GI5").play("glow");
         sym.getSymbol("GD1").play("glow");
         sym.getSymbol("GD2").play("glow");
         sym.getSymbol("GD3").play("glow");
         sym.getSymbol("GD4").play("glow");
         sym.getSymbol("GD5").play("glow");
         
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_GI1}", "click", function(sym, e) {
         sym.getSymbol("GI1").play("mov");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_GI2}", "click", function(sym, e) {
         sym.getSymbol("GI2").play("mov");
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_07")[0].play();
         sym.$("voz_07")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag7");
   //Edge symbol end:'pag7'

   //=========================================================
   
   //Edge symbol: 'GD1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GD1");
   //Edge symbol end:'GD1'

   //=========================================================
   
   //Edge symbol: 'GD2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GD2");
   //Edge symbol end:'GD2'

   //=========================================================
   
   //Edge symbol: 'GD3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GD3");
   //Edge symbol end:'GD3'

   //=========================================================
   
   //Edge symbol: 'GD4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GD4");
   //Edge symbol end:'GD4'

   //=========================================================
   
   //Edge symbol: 'GD5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         sym.$("S08_radar")[0].pause();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         sym.$("S08_radar")[0].play();
         sym.$("S08_radar")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5128, function(sym, e) {
         
         sym.$("S08_radar")[0].play();
         sym.$("S08_radar")[0].currentTime = 0;

      });
      //Edge binding end

   })("GD5");
   //Edge symbol end:'GD5'

   //=========================================================
   
   //Edge symbol: 'GI1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GI1");
   //Edge symbol end:'GI1'

   //=========================================================
   
   //Edge symbol: 'GI2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GI2");
   //Edge symbol end:'GI2'

   //=========================================================
   
   //Edge symbol: 'GI3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("GI3");
   //Edge symbol end:'GI3'

   //=========================================================
   
   //Edge symbol: 'GI4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

   })("GI4");
   //Edge symbol end:'GI4'

   //=========================================================
   
   //Edge symbol: 'GI5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("GI5");
   //Edge symbol end:'GI5'

   //=========================================================
   
   //Edge symbol: 'pag8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65250, function(sym, e) {
         // insert code here
         sym.getSymbol("gato_08").play("mov");
         
         sym.getSymbol("paj1").play("glow");
         sym.getSymbol("paj2").play("glow");
         sym.getSymbol("paj3").play("glow");
         
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64250, function(sym, e) {
         sym.$("paj1").show();
         sym.$("paj2").show();
         sym.$("paj3").show();
         sym.$("gato_08").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_08")[0].play();
         sym.$("voz_08")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.$("S08_viento")[0].play();
         sym.$("S08_viento")[0].currentTime = 0;
         
         sym.$("S8_video")[0].play();
         sym.$("S8_video")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj1}", "click", function(sym, e) {
         sym.getSymbol("paj1").play("vuelo");
         sym.$("btn_paj1").css("display","none");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj2}", "click", function(sym, e) {
         sym.getSymbol("paj2").play("vuelo");
         sym.$("btn_paj2").css("display","none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj3}", "click", function(sym, e) {
         sym.getSymbol("paj3").play("vuelo");
         sym.$("btn_paj3").css("display","none");

      });
      //Edge binding end

   })("pag8");
   //Edge symbol end:'pag8'

   //=========================================================
   
   //Edge symbol: 'gato_08'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play("mov");

      });
      //Edge binding end

   })("gato_08");
   //Edge symbol end:'gato_08'

   //=========================================================
   
   //Edge symbol: 'paj1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].pause();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].currentTime = 0;
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].currentTime = 0;

      });
      //Edge binding end

   })("paj1");
   //Edge symbol end:'paj1'

   //=========================================================
   
   //Edge symbol: 'paj2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].pause();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].currentTime = 0;
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].currentTime = 0;

      });
      //Edge binding end

   })("paj2");
   //Edge symbol end:'paj2'

   //=========================================================
   
   //Edge symbol: 'paj3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_aleteo")[0].currentTime = 0;
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].play();
         sym.getComposition().getStage().getSymbol("pag8").$("S09_canto")[0].currentTime = 0;

      });
      //Edge binding end

   })("paj3");
   //Edge symbol end:'paj3'

   //=========================================================
   
   //Edge symbol: 'pag9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getSymbol("glow_tejas").play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_teja2}", "click", function(sym, e) {
         sym.getSymbol("glow_tejas").stop();
         sym.play("continua");
         
         sym.$("S10_acierto")[0].play();
         sym.$("S10_acierto")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_teja1}", "click", function(sym, e) {
         sym.getSymbol("glow_tejas").stop();
         sym.play("continua");
         
         sym.$("S10_acierto")[0].play();
         sym.$("S10_acierto")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_09")[0].play();
         sym.$("voz_09")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag9");
   //Edge symbol end:'pag9'

   //=========================================================
   
   //Edge symbol: 'pag11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56370, function(sym, e) {
         sym.getSymbol("p1_11").play("glow");
         sym.getSymbol("p2_11").play("glow");
         sym.getSymbol("p3_11").play("glow");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gatonegro}", "click", function(sym, e) {
         sym.getSymbol("gatonegro").play("vuelo");
         
         if(audio==0){
         sym.$("S11_helicoptero")[0].play();
         sym.$("S11_helicoptero")[0].currentTime = 0;
         audio=1;
         }
         
         sym.$("btn_gatonegro").css("display","none");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gatoblanco}", "click", function(sym, e) {
         sym.getSymbol("gatoblanco").play("vuelo");
         
         if(audio==0){
         sym.$("S11_helicoptero")[0].play();
         sym.$("S11_helicoptero")[0].currentTime = 0;
         audio=1;
         }
         
         sym.$("btn_gatoblanco").css("display","none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj1}", "click", function(sym, e) {
         sym.getSymbol("p1_11").play("vuelo");
         
         sym.$("S11_canto")[0].play();
         sym.$("S11_canto")[0].currentTime = 0;
         
         sym.$("btn_paj1").css("display","none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj2}", "click", function(sym, e) {
         sym.getSymbol("p2_11").play("vuelo");
         
         sym.$("S11_canto")[0].play();
         sym.$("S11_canto")[0].currentTime = 0;
         
         sym.$("btn_paj2").css("display","none");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_paj3}", "click", function(sym, e) {
         sym.getSymbol("p3_11").play("vuelo");
         
         sym.$("S11_canto")[0].play();
         sym.$("S11_canto")[0].currentTime = 0;
         
         sym.$("btn_paj3").css("display","none");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55370, function(sym, e) {
         sym.$("p1_11").show();
         sym.$("p2_11").show(); 
         sym.$("p3_11").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_11")[0].play();
         sym.$("voz_11")[0].currentTime = 0;
         
         audio=0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.getSymbol("gatoblanco").play("glow");
         sym.getSymbol("gatonegro").play("glow");

      });
      //Edge binding end

   })("pag11");
   //Edge symbol end:'pag11'

   //=========================================================
   
   //Edge symbol: 'glow_tejas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

   })("glow_tejas");
   //Edge symbol end:'glow_tejas'

   //=========================================================
   
   //Edge symbol: 'p3_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("p3_11");
   //Edge symbol end:'p3_11'

   //=========================================================
   
   //Edge symbol: 'p2_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("p2_11");
   //Edge symbol end:'p2_11'

   //=========================================================
   
   //Edge symbol: 'p1_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("p1_11");
   //Edge symbol end:'p1_11'

   //=========================================================
   
   //Edge symbol: 'gatonegro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.play("vuelo");

      });
      //Edge binding end

   })("gatonegro");
   //Edge symbol end:'gatonegro'

   //=========================================================
   
   //Edge symbol: 'gatoblanco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.play("vuelo");

      });
      //Edge binding end

   })("gatoblanco");
   //Edge symbol end:'gatoblanco'

   //=========================================================
   
   //Edge symbol: 'pag12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12750, function(sym, e) {
         sym.getSymbol("gatod_12").play("glow");
         sym.getSymbol("gatoi_12").play("glow");
         
         sym.$("btn_gaton").show(); 
         sym.$("btn_gatob").show();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gatob}", "click", function(sym, e) {
         sym.getSymbol("gatod_12").play("tap");
         sym.getSymbol("bermuda_d").play();
         sym.$("btn_gatob").hide();
         
         sym.$("S12_maullidosuave")[0].play();
         sym.$("S12_maullidosuave")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gaton}", "click", function(sym, e) {
         sym.getSymbol("bermunda_i").play();
         sym.getSymbol("gatoi_12").play("tap");
         sym.$("btn_gaton").hide();
         
         sym.$("S12_maullidosuave2")[0].play();
         sym.$("S12_maullidosuave2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_12")[0].play();
         sym.$("voz_12")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag12");
   //Edge symbol end:'pag12'

   //=========================================================
   
   //Edge symbol: 'gatod_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play("tap");

      });
      //Edge binding end

   })("gatod_12");
   //Edge symbol end:'gatod_12'

   //=========================================================
   
   //Edge symbol: 'gatoi_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play("glow");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.play("tap");

      });
      //Edge binding end

   })("gatoi_12");
   //Edge symbol end:'gatoi_12'

   //=========================================================
   
   //Edge symbol: 'bermuda_d'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("bermuda_d");
   //Edge symbol end:'bermuda_d'

   //=========================================================
   
   //Edge symbol: 'bermunda_i'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("bermunda_i");
   //Edge symbol end:'bermunda_i'

   //=========================================================
   
   //Edge symbol: 'pag13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6840, function(sym, e) {
         // insert code here
         sym.getSymbol("olas").play("mov");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_olas}", "click", function(sym, e) {
         sym.getSymbol("olas").play("azul");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
          
         sym.$("voz_13")[0].play();
         sym.$("voz_13")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.getSymbol("olas").$("S14_mar")[0].play();
         sym.getSymbol("olas").$("S14_mar")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag13");
   //Edge symbol end:'pag13'

   //=========================================================
   
   //Edge symbol: 'olas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         
         sym.play("mov2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play("mov");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         
         sym.$("S14_olas")[0].play();
         sym.$("S14_olas")[0].currentTime = 0;

      });
      //Edge binding end

   })("olas");
   //Edge symbol end:'olas'

   //=========================================================
   
   //Edge symbol: 'pag14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // insert code here
         sym.getSymbol("ojoytronco_14").play();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_gato}", "click", function(sym, e) {
         sym.getSymbol("narizypata_14").play();
         
         sym.$("S14_ronroneo")[0].play();
         sym.$("S14_ronroneo")[0].currentTime = 0;
         
         sym.getSymbol("narizypata_14").$("S15_suspiro2")[0].play();
         sym.getSymbol("narizypata_14").$("S15_suspiro2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_14")[0].play();
         sym.$("voz_14")[0].currentTime = 0;

      });
      //Edge binding end

   })("pag14");
   //Edge symbol end:'pag14'

   //=========================================================
   
   //Edge symbol: 'ojoytronco_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("ojoytronco_14");
   //Edge symbol end:'ojoytronco_14'

   //=========================================================
   
   //Edge symbol: 'narizypata_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

      

   })("narizypata_14");
   //Edge symbol end:'narizypata_14'

   //=========================================================
   
   //Edge symbol: 'pag15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58250, function(sym, e) {
         sym.getSymbol("gatos_15").play();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_espiral}", "click", function(sym, e) {
         sym.getSymbol("espiral_15").play();
         
         sym.$("S15_ronroneo")[0].play();
         sym.$("S15_ronroneo")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.$("voz_15")[0].play();
         sym.$("voz_15")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56000, function(sym, e) {
         
         sym.$("FondoTodo_15").show();
         sym.$("gatos_15").show();

      });
      //Edge binding end

   })("pag15");
   //Edge symbol end:'pag15'

   //=========================================================
   
   //Edge symbol: 'espiral_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("espiral_15");
   //Edge symbol end:'espiral_15'

   //=========================================================
   
   //Edge symbol: 'gatos_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("gatos_15");
   //Edge symbol end:'gatos_15'

   //=========================================================
   
   //Edge symbol: 'tendedero_textos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 991, function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").css("display","block");
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").show();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1989, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6993, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7991, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8992, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9989, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10991, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13001, function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").css("display","none");
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").hide();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13009, function(sym, e) {
         
         sym.play("1_1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").css("display","none");
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").hide();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20, function(sym, e) {
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").css("display","none");
         sym.getComposition().getStage().getSymbol("portada").getSymbol("tendedero").$("izq_tendedero").hide();
         

      });
      //Edge binding end

   })("tendedero_textos");
   //Edge symbol end:'tendedero_textos'

   //=========================================================
   
   //Edge symbol: 'gato_p'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play("inicio");

      });
      //Edge binding end

   })("gato_p");
   //Edge symbol end:'gato_p'

   //=========================================================
   
   //Edge symbol: 'leche_p'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("leche_p");
   //Edge symbol end:'leche_p'

   //=========================================================
   
   //Edge symbol: 'canasta_p'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("canasta_p");
   //Edge symbol end:'canasta_p'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-603938");