(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"greeting_card_animated_with_music_atlas_", frames: [[0,0,1856,1278]]},
		{name:"greeting_card_animated_with_music_atlas_2", frames: [[0,1149,1147,12],[2028,0,12,820],[0,1135,1169,12],[2013,0,13,815],[1180,696,603,727],[0,0,1178,806],[1785,794,158,40],[1785,696,101,96],[1180,0,831,694],[0,808,301,325]]}
];


// symbols:



(lib.CachedTexturedBitmap_45 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_46 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_47 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_48 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_50 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_51 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_52 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_53 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_55 = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redballbackground = function() {
	this.initialize(ss["greeting_card_animated_with_music_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_55();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_Layer_1, null, null);


(lib.star_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_Layer_1, null, null);


(lib.Scene_1_Year = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Year
	this.text = new cjs.Text("9", "76px 'Lucida Calligraphy'", "#CC9900");
	this.text.lineHeight = 97;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(462.35,-105);

	this.text_1 = new cjs.Text("1", "89px 'Lucida Calligraphy'", "#CC9900");
	this.text_1.lineHeight = 114;
	this.text_1.lineWidth = 49;
	this.text_1.parent = this;
	this.text_1.setTransform(392.55,-108.75);

	this.text_2 = new cjs.Text("0", "89px 'Lucida Calligraphy'", "#CC9900");
	this.text_2.lineHeight = 114;
	this.text_2.lineWidth = 59;
	this.text_2.parent = this;
	this.text_2.setTransform(318.45,-104.75);

	this.text_3 = new cjs.Text("2", "89px 'Lucida Calligraphy'", "#CC9900");
	this.text_3.lineHeight = 114;
	this.text_3.lineWidth = 51;
	this.text_3.parent = this;
	this.text_3.setTransform(249.7,-104.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3,p:{y:-104.75}},{t:this.text_2,p:{x:318.45,y:-104.75}},{t:this.text_1,p:{x:392.55,y:-108.75}},{t:this.text,p:{x:462.35,y:-105}}]}).to({state:[{t:this.text_3,p:{y:16.25}},{t:this.text_2,p:{x:320.45,y:-105.75}},{t:this.text_1,p:{x:394.55,y:-109.75}},{t:this.text,p:{x:464.35,y:-106}}]},14).to({state:[{t:this.text_3,p:{y:16.25}},{t:this.text_2,p:{x:311.45,y:59.25}},{t:this.text_1,p:{x:394.55,y:-109.75}},{t:this.text,p:{x:464.35,y:-106}}]},15).to({state:[{t:this.text_3,p:{y:16.25}},{t:this.text_2,p:{x:311.45,y:59.25}},{t:this.text_1,p:{x:400.55,y:52.25}},{t:this.text,p:{x:464.35,y:-106}}]},15).to({state:[{t:this.text_3,p:{y:16.25}},{t:this.text_2,p:{x:311.45,y:59.25}},{t:this.text_1,p:{x:400.55,y:52.25}},{t:this.text,p:{x:462.35,y:106.15}}]},15).wait(16));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Warm_wishes_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warm_wishes_text
	this.text = new cjs.Text("Warm Wishes", "27px 'Lucida Calligraphy'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(190,347.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Merry_Christmas_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Merry_Christmas_text
	this.text = new cjs.Text("Merry Christmas", "italic 61px 'Brush Script MT'", "#C67500");
	this.text.lineHeight = 77;
	this.text.lineWidth = 370;
	this.text.parent = this;
	this.text.setTransform(183,223.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Happy_New_Year_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Happy_New_Year_text
	this.text = new cjs.Text("and Happy New Year", "29px 'Impact'", "#C90F00");
	this.text.lineHeight = 37;
	this.text.lineWidth = 248;
	this.text.parent = this;
	this.text.setTransform(296,290.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border
	this.instance = new lib.CachedTexturedBitmap_48();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-3.4,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,394.45,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(543.5,-1.75,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11.4,0.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_balls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// balls
	this.instance = new lib.CachedTexturedBitmap_50();
	this.instance.parent = this;
	this.instance.setTransform(233.35,-164.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.CachedTexturedBitmap_51();
	this.instance.parent = this;
	this.instance.setTransform(-233,-46,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.pressBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.btnText = new cjs.Text("Text", "14px 'Impact'", "#FFFFFF");
	this.btnText.name = "btnText";
	this.btnText.textAlign = "center";
	this.btnText.lineHeight = 19;
	this.btnText.lineWidth = 37;
	this.btnText.parent = this;
	this.btnText.setTransform(38.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.btnText).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_53();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,79,23.2);


(lib.Moving_Background_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_52();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Moving_Background_Layer_1, null, null);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.tree_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(207.8,173.5,1,1,0,0,0,207.8,173.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(0,0,415.5,347), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.star_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(24.3,23,1,1,0,0,0,24.3,23);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-1,-1,50.5,48), null);


(lib.Scene_1_Tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tree
	this.redTree = new lib.tree();
	this.redTree.name = "redTree";
	this.redTree.parent = this;
	this.redTree.setTransform(-220.2,206.5,1,1,0,0,0,207.8,173.5);

	this.timeline.addTween(cjs.Tween.get(this.redTree).wait(1).to({x:-210.5},0).wait(1).to({x:-200.8},0).wait(1).to({x:-191.1},0).wait(1).to({x:-181.4},0).wait(1).to({x:-171.7},0).wait(1).to({x:-162},0).wait(1).to({x:-152.3},0).wait(1).to({x:-142.6},0).wait(1).to({x:-132.9},0).wait(1).to({x:-123.2},0).wait(1).to({x:-113.5},0).wait(1).to({x:-103.85},0).wait(1).to({x:-94.15},0).wait(1).to({x:-84.45},0).wait(1).to({x:-74.75},0).wait(1).to({x:-65.05},0).wait(1).to({x:-55.35},0).wait(1).to({x:-45.65},0).wait(1).to({x:-35.95},0).wait(1).to({x:-26.25},0).wait(1).to({x:-16.55},0).wait(1).to({x:-6.85},0).wait(1).to({x:2.8},0).wait(1).to({x:12.5},0).wait(1).to({x:22.2},0).wait(1).to({x:31.9},0).wait(1).to({x:41.6},0).wait(1).to({x:51.3},0).wait(1).to({x:61},0).wait(1).to({x:70.7},0).wait(1).to({x:80.4},0).wait(1).to({x:90.1},0).wait(1).to({x:99.8},0).wait(1).to({x:109.5},0).wait(1).to({x:119.15},0).wait(1).to({x:128.85},0).wait(1).to({x:138.55},0).wait(1).to({x:148.25},0).wait(1).to({x:157.95},0).wait(1).to({x:167.65},0).wait(1).to({x:177.35},0).wait(1).to({x:187.05},0).wait(1).to({x:196.75},0).wait(1).to({x:206.45},0).wait(1).to({x:216.1},0).wait(1).to({x:225.8},0).wait(29));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Star
	this.star = new lib.star();
	this.star.name = "star";
	this.star.parent = this;
	this.star.setTransform(739.55,170.8,1,1,0,0,0,24.2,23.1);

	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(635,80.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star}]}).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.star}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.star).wait(1).to({regX:24.3,regY:23,x:726.75,y:181.8},0).wait(1).to({x:711.4,y:193.25},0).wait(1).to({x:696,y:203.4},0).wait(1).to({x:680.05,y:212.55},0).wait(1).to({x:663.35,y:220.35},0).wait(1).to({x:649.3,y:225},0).wait(1).to({x:628.8,y:229.6},0).wait(1).to({x:610.6,y:233.3},0).wait(1).to({x:592.5,y:236.65},0).wait(1).to({x:574.4,y:239.65},0).wait(1).to({x:556.25,y:242.3},0).wait(1).to({x:538.05,y:244.4},0).wait(1).to({x:521.35,y:245.7},0).wait(1).to({x:501.85,y:246.05},0).wait(1).to({x:483.45,y:246.1},0).wait(1).to({x:465.15,y:246.05},0).wait(1).to({x:446.9,y:245.8},0).wait(1).to({x:428.6,y:245.4},0).wait(1).to({x:410.35,y:244.8},0).wait(1).to({x:392,y:243.95},0).wait(1).to({x:373.7,y:242.7},0).wait(1).to({x:357.5,y:240.9},0).wait(1).to({x:338,y:238.4},0).wait(1).to({x:319.7,y:235.9},0).wait(1).to({x:301.5,y:233.3},0).wait(1).to({x:283.35,y:230.55},0).wait(1).to({x:265.25,y:227.65},0).wait(1).to({x:247.15,y:224.5},0).wait(1).to({x:229.05,y:220.95},0).wait(1).to({x:214.05,y:217.35},0).wait(1).to({x:194.55,y:212.05},0).wait(1).to({x:176.65,y:206.9},0).wait(1).to({x:158.95,y:201.6},0).wait(1).to({x:141.4,y:196},0).wait(1).to({x:123.95,y:190},0).wait(1).to({x:107.75,y:183.55},0).wait(1).to({x:91.45,y:174.5},0).wait(1).to({x:76,y:164.55},0).wait(1).to({x:61.35,y:153.5},0).wait(1).to({x:49.65,y:140.2},0).wait(1).to({x:48.25,y:123.95},0).wait(1).to({x:48.1,y:106.05},0).wait(1).to({x:56.25,y:87.3},0).wait(1).to({x:66.6,y:71.3},0).wait(1).to({x:78.4,y:59.4},0).wait(1).to({x:85,y:44.95},0).wait(1).to({x:99.1,y:33.95},0).wait(26).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buttons
	this.stopBtn = new lib.pressBtn();
	this.stopBtn.name = "stopBtn";
	this.stopBtn.parent = this;
	this.stopBtn.setTransform(500,381,1,1,0,0,0,39,9.5);
	new cjs.ButtonHelper(this.stopBtn, 0, 1, 1);

	this.pauseBtn = new lib.pressBtn();
	this.pauseBtn.name = "pauseBtn";
	this.pauseBtn.parent = this;
	this.pauseBtn.setTransform(500,358,1,1,0,0,0,39,9.5);
	new cjs.ButtonHelper(this.pauseBtn, 0, 1, 1);

	this.playBtn = new lib.pressBtn();
	this.playBtn.name = "playBtn";
	this.playBtn.parent = this;
	this.playBtn.setTransform(499.5,334.5,1,1,0,0,0,39,9.5);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBtn},{t:this.pauseBtn},{t:this.stopBtn}]}).wait(75));

}).prototype = p = new cjs.MovieClip();


(lib.MovingBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Moving_Background_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(294.5,201.5,1,1,0,0,0,294.5,201.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.MovingBackground, new cjs.Rectangle(0,0,589,403), null);


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.BlueBackground = new lib.MovingBackground();
	this.BlueBackground.name = "BlueBackground";
	this.BlueBackground.parent = this;
	this.BlueBackground.setTransform(-286.5,196,1,1,0,0,0,294.5,201.5);

	this.timeline.addTween(cjs.Tween.get(this.BlueBackground).wait(1).to({x:-271.25},0).wait(1).to({x:-256},0).wait(1).to({x:-240.75},0).wait(1).to({x:-225.5},0).wait(1).to({x:-210.25},0).wait(1).to({x:-195},0).wait(1).to({x:-179.75},0).wait(1).to({x:-164.55},0).wait(1).to({x:-149.3},0).wait(1).to({x:-134.05},0).wait(1).to({x:-118.8},0).wait(1).to({x:-103.55},0).wait(1).to({x:-88.3},0).wait(1).to({x:-73.05},0).wait(1).to({x:-57.85},0).wait(1).to({x:-42.6},0).wait(1).to({x:-27.35},0).wait(1).to({x:-12.1},0).wait(1).to({x:3.15},0).wait(1).to({x:18.4},0).wait(1).to({x:33.65},0).wait(1).to({x:48.9},0).wait(1).to({x:64.1},0).wait(1).to({x:79.35},0).wait(1).to({x:94.6},0).wait(1).to({x:109.85},0).wait(1).to({x:125.1},0).wait(1).to({x:140.35},0).wait(1).to({x:155.6},0).wait(1).to({x:170.8},0).wait(1).to({x:186.05},0).wait(1).to({x:201.3},0).wait(1).to({x:216.55},0).wait(1).to({x:231.8},0).wait(1).to({x:247.05},0).wait(1).to({x:262.3},0).wait(1).to({x:277.5},0).wait(1).to({x:292.75},0).wait(1).to({x:307.95},0).wait(1).to({x:323.2},0).wait(1).to({x:338.45},0).wait(1).to({x:353.7},0).wait(1).to({x:368.95},0).wait(1).to({x:384.2},0).wait(1).to({x:399.4},0).wait(1).to({x:414.65},0).wait(1).to({x:429.9},0).wait(1).to({x:445.15},0).wait(1).to({x:460.4},0).wait(1).to({x:475.65},0).wait(1).to({x:490.9},0).wait(1).to({x:506.1},0).wait(1).to({x:521.35},0).wait(1).to({x:536.6},0).wait(1).to({x:551.85},0).wait(1).to({x:567.1},0).wait(1).to({x:582.35},0).wait(1).to({x:597.6},0).wait(1).to({x:612.85},0).wait(1).to({x:628.05},0).wait(1).to({x:643.3},0).wait(1).to({x:658.55},0).wait(1).to({x:673.8},0).wait(1).to({x:689.05},0).wait(1).to({x:704.3},0).wait(1).to({x:719.55},0).wait(1).to({x:734.75},0).wait(1).to({x:750},0).wait(1).to({x:765.25},0).wait(1).to({x:780.5},0).wait(1).to({x:795.75},0).wait(1).to({x:811},0).wait(1).to({x:826.25},0).wait(1).to({x:841.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.greeting_card_animated_with_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{BeginPoint:0});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.playBtn = this.Buttons.playBtn;
		this.pauseBtn = this.Buttons.pauseBtn;
		this.stopBtn = this.Buttons.stopBtn;
		this.BlueBackground = this.Layer_4.BlueBackground;
		this.star = this.Star.star;
		this.redTree = this.Tree.redTree;
		this.stop();
		
		stage.enableMouseOver();
		
		this.playBtn.cursor = "pointer";
		this.pauseBtn.cursor = "pointer";
		this.stopBtn.cursor = "pointer";
		
		this.playBtn.btnText.text = "Play";
		this.pauseBtn.btnText.text = "Pause";
		this.stopBtn.btnText.text = "Stop";
		
		createjs.Sound.registerSound("JingleBells.mp3", "JingleBells");
		
		this.playBtn.on("click", function(e){
		     createjs.Sound.play("JingleBells");
		});
		
		this.pauseBtn.on("click", function(e){
		     createjs.Sound.stop();
		});
		
		this.stopBtn.on("click", function(e){
		     createjs.Sound.stop();
		});
		
		
		this.playBtn.addEventListener("click", playClicked.bind(this));
		function playClicked()
		{
			this.play();
			isPlaying = true;
		}
		
		this.pauseBtn.addEventListener("click", pauseClicked.bind(this));
		function pauseClicked()
		{
			this.stop();
			isPlaying = false;
		}
		
		this.stopBtn.addEventListener("click", stopClicked.bind(this));
		function stopClicked() {
			this.gotoAndStop("BeginPoint");
			isPlaying = false;
		}
	}
	this.frame_47 = function() {
		this.redTree = undefined;this.redTree = this.Tree.redTree;
	}
	this.frame_74 = function() {
		this.redTree = undefined;this.star = undefined;this.redTree = this.Tree.redTree;
		this.___loopingOver___ = true;
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(27).call(this.frame_74).wait(1));

	// Buttons_obj_
	this.Buttons = new lib.Scene_1_Buttons();
	this.Buttons.name = "Buttons";
	this.Buttons.parent = this;
	this.Buttons.setTransform(499.8,359.4,1,1,0,0,0,499.8,359.4);
	this.Buttons.depth = 0;
	this.Buttons.isAttachedToCamera = 0
	this.Buttons.isAttachedToMask = 0
	this.Buttons.layerDepth = 0
	this.Buttons.layerIndex = 0
	this.Buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Buttons).wait(75));

	// White_stars (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AfvYCIiWiEIDHAQICFiWIgRDHICWCFIjHgRIiECWgEgl1AaOIhuA3IA3huIg3htIBuA3IBug3Ig3BtIA3BugAgmPGIiKgMIB1hJIANiKIBIB2ICJANIh2BIIgMCJgEAnHACkIhGAjIAjhHIgjhGIBGAjIBGgjIgjBGIAjBHgAQdgLIiig+ICngwIA/iiIAvCoICjA+IioAvIg/CigAqEiIIjABVIBmi3IhUjAIC3BnIDAhWIhnC4IBWC/gAB2hvIhDAcIAlg/IgbhDIA+AlIBDgbIglA+IAbBEgAwvnrIACgMIAGAMgAxwswIhdgWIBYgmIAThQIAJAAIAgBMIBcAWIhXAlIgWBdgEglSgNoIi6AJICPh4IgJi5IB3CPIC4gJIAAACIiNB1IAJC6gEAkbgWCIioBBIBfiZIhCinICaBeICnhBIheCZIBBCogAPa3dIiJgiICBg3IAhiHIA3CAICIAiIiBA2IghCIgAv93TIibAQIBzhqIgPiaIBpBzICbgQIhzBqIAPCbgA/s5QIACAAIgCACg");
	mask.setTransform(277.7,198.65);

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(-286.5,196,1,1,0,0,0,-286.5,196);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 1
	this.Layer_4.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(1).to({regX:277.5,x:277.5},0).wait(74));

	// Border_obj_
	this.Border = new lib.Scene_1_Border();
	this.Border.name = "Border";
	this.Border.parent = this;
	this.Border.setTransform(279.3,202.4,1,1,0,0,0,279.3,202.4);
	this.Border.depth = 0;
	this.Border.isAttachedToCamera = 0
	this.Border.isAttachedToMask = 0
	this.Border.layerDepth = 0
	this.Border.layerIndex = 2
	this.Border.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Border).wait(75));

	// Star_obj_
	this.Star = new lib.Scene_1_Star();
	this.Star.name = "Star";
	this.Star.parent = this;
	this.Star.setTransform(739.6,170.7,1,1,0,0,0,739.6,170.7);
	this.Star.depth = 0;
	this.Star.isAttachedToCamera = 0
	this.Star.isAttachedToMask = 0
	this.Star.layerDepth = 0
	this.Star.layerIndex = 3
	this.Star.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Star).wait(1).to({regX:393.8,regY:140,x:393.8,y:140},0).wait(73).to({regX:739.6,regY:170.7,x:739.6,y:170.7},0).wait(1));

	// Happy_New_Year_text_obj_
	this.Happy_New_Year_text = new lib.Scene_1_Happy_New_Year_text();
	this.Happy_New_Year_text.name = "Happy_New_Year_text";
	this.Happy_New_Year_text.parent = this;
	this.Happy_New_Year_text.setTransform(420,310.3,1,1,0,0,0,420,310.3);
	this.Happy_New_Year_text.depth = 0;
	this.Happy_New_Year_text.isAttachedToCamera = 0
	this.Happy_New_Year_text.isAttachedToMask = 0
	this.Happy_New_Year_text.layerDepth = 0
	this.Happy_New_Year_text.layerIndex = 4
	this.Happy_New_Year_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Happy_New_Year_text).wait(75));

	// Merry_Christmas_text_obj_
	this.Merry_Christmas_text = new lib.Scene_1_Merry_Christmas_text();
	this.Merry_Christmas_text.name = "Merry_Christmas_text";
	this.Merry_Christmas_text.parent = this;
	this.Merry_Christmas_text.setTransform(368,261.5,1,1,0,0,0,368,261.5);
	this.Merry_Christmas_text.depth = 0;
	this.Merry_Christmas_text.isAttachedToCamera = 0
	this.Merry_Christmas_text.isAttachedToMask = 0
	this.Merry_Christmas_text.layerDepth = 0
	this.Merry_Christmas_text.layerIndex = 5
	this.Merry_Christmas_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Merry_Christmas_text).wait(75));

	// Year_obj_
	this.Year = new lib.Scene_1_Year();
	this.Year.name = "Year";
	this.Year.parent = this;
	this.Year.setTransform(382.7,-51,1,1,0,0,0,382.7,-51);
	this.Year.depth = 0;
	this.Year.isAttachedToCamera = 0
	this.Year.isAttachedToMask = 0
	this.Year.layerDepth = 0
	this.Year.layerIndex = 6
	this.Year.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Year).wait(75));

	// Warm_wishes_text_obj_
	this.Warm_wishes_text = new lib.Scene_1_Warm_wishes_text();
	this.Warm_wishes_text.name = "Warm_wishes_text";
	this.Warm_wishes_text.parent = this;
	this.Warm_wishes_text.setTransform(295.9,384.4,1,1,0,0,0,295.9,384.4);
	this.Warm_wishes_text.depth = 0;
	this.Warm_wishes_text.isAttachedToCamera = 0
	this.Warm_wishes_text.isAttachedToMask = 0
	this.Warm_wishes_text.layerDepth = 0
	this.Warm_wishes_text.layerIndex = 7
	this.Warm_wishes_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Warm_wishes_text).wait(75));

	// Tree_obj_
	this.Tree = new lib.Scene_1_Tree();
	this.Tree.name = "Tree";
	this.Tree.parent = this;
	this.Tree.setTransform(-220.3,206.5,1,1,0,0,0,-220.3,206.5);
	this.Tree.depth = 0;
	this.Tree.isAttachedToCamera = 0
	this.Tree.isAttachedToMask = 0
	this.Tree.layerDepth = 0
	this.Tree.layerIndex = 8
	this.Tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tree).wait(1).to({regX:2.8,x:2.8},0).wait(46).to({regX:-220.3,x:-220.3},0).wait(1).to({regX:2.8,x:2.8},0).wait(26).to({regX:-220.3,x:-220.3},0).wait(1));

	// balls_obj_
	this.balls = new lib.Scene_1_balls();
	this.balls.name = "balls";
	this.balls.parent = this;
	this.balls.setTransform(384.1,17.4,1,1,0,0,0,384.1,17.4);
	this.balls.depth = 0;
	this.balls.isAttachedToCamera = 0
	this.balls.isAttachedToMask = 0
	this.balls.layerDepth = 0
	this.balls.layerIndex = 9
	this.balls.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.balls).wait(75));

	// Background_obj_
	this.Background = new lib.Scene_1_Background();
	this.Background.name = "Background";
	this.Background.parent = this;
	this.Background.setTransform(231,273.5,1,1,0,0,0,231,273.5);
	this.Background.depth = 0;
	this.Background.isAttachedToCamera = 0
	this.Background.isAttachedToMask = 0
	this.Background.layerDepth = 0
	this.Background.layerIndex = 10
	this.Background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,35.7,917.9,557.3);
// library properties:
lib.properties = {
	id: 'E804AD81305FA9489AF2D92B774E544D',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/greeting_card_animated_with_music_atlas_.png?1548046588294", id:"greeting_card_animated_with_music_atlas_"},
		{src:"images/greeting_card_animated_with_music_atlas_2.png?1548046588294", id:"greeting_card_animated_with_music_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E804AD81305FA9489AF2D92B774E544D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;