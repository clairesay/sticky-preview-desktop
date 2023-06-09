// import logo from './logo.svg';
import './App.css';
import des from './design.png';
import colorSelectSwatch from './assets/color-select-swatch.png';
import blackFrame from './assets/black-frame.png';
import whiteFrame from './assets/white-frame.png';
import noFrame from './assets/no-frame.png';

// ALL IMAGES
import noFrameSmallDE from './assets/live-preview/no-frame-small-de.png';
import noFrameSmallSDE from './assets/live-preview/no-frame-small-sde.png';
import noFrameMediumDE from './assets/live-preview/no-frame-medium-de.png';
import noFrameMediumSDE from './assets/live-preview/no-frame-medium-sde.png';
import noFrameLargeDE from './assets/live-preview/no-frame-large-de.png';
import noFrameLargeSDE from './assets/live-preview/no-frame-large-sde.png';
import whiteFrameSmallDE from './assets/live-preview/white-frame-small-de.png';
import whiteFrameSmallSDE from './assets/live-preview/white-frame-small-sde.png';
import whiteFrameMediumDE from './assets/live-preview/white-frame-medium-de.png';
import whiteFrameMediumSDE from './assets/live-preview/white-frame-medium-sde.png';
import whiteFrameLargeDE from './assets/live-preview/white-frame-large-de.png';
import whiteFrameLargeSDE from './assets/live-preview/white-frame-large-sde.png';
import blackFrameSmallDE from './assets/live-preview/black-frame-small-de.png';
import blackFrameSmallSDE from './assets/live-preview/black-frame-small-sde.png';
import blackFrameMediumDE from './assets/live-preview/black-frame-medium-de.png';
import blackFrameMediumSDE from './assets/live-preview/black-frame-medium-sde.png';
import blackFrameLargeDE from './assets/live-preview/black-frame-large-de.png';
import blackFrameLargeSDE from './assets/live-preview/black-frame-large-sde.png';
import noFrameBack from './assets/live-preview/no-frame-back.png';
import whiteFrameBack from './assets/live-preview/white-frame-back.png';
import blackFrameBack from './assets/live-preview/black-frame-back.png';
import noFrameGroup from './assets/live-preview/no-frame-group.png';
import whiteFrameGroup from './assets/live-preview/white-frame-group.png';
import blackFrameGroup from './assets/live-preview/black-frame-group.png';


const previewSets = {
	"small no-frame": [noFrameSmallDE, noFrameSmallSDE, noFrameBack, noFrameGroup],
	"medium no-frame": [noFrameMediumDE, noFrameMediumSDE, noFrameBack, noFrameGroup],
	"large no-frame": [noFrameLargeDE, noFrameLargeSDE, noFrameBack, noFrameGroup],
	"small white-frame": [whiteFrameSmallDE, whiteFrameSmallSDE, whiteFrameBack, whiteFrameGroup],
	"medium white-frame": [whiteFrameMediumDE, whiteFrameMediumSDE, whiteFrameBack, whiteFrameGroup],
	"large white-frame": [whiteFrameLargeDE, whiteFrameLargeSDE, whiteFrameBack, whiteFrameGroup],
	"small black-frame": [blackFrameSmallDE, blackFrameSmallSDE, blackFrameBack, blackFrameGroup],
	"medium black-frame": [blackFrameMediumDE, blackFrameMediumSDE, blackFrameBack, blackFrameGroup],
	"large black-frame": [blackFrameLargeDE, blackFrameLargeSDE, blackFrameBack, blackFrameGroup]
}

console.log(previewSets);


function Parameter(name, type, options, defaultSelection, showCompare) {
	this.name = name;
	this.type = type;
	this.options = options;
	this.default = defaultSelection;
	this.showCompare = showCompare;
}

const framing = new Parameter("Framing",
	"Thumbnail",
	[{ label: "Black frame", asset: blackFrame },
	{ label: "White frame", asset: whiteFrame },
	{ label: "No frame", asset: noFrame },
	],
	2,
	true
);



function renderSelector(parameter) {
	let thumbnails;

	if (parameter.type === "Thumbnail") {
		thumbnails =

			(<article class="selector" onLoad={() => updatePreview(currentSelection.frame)}>

				<p><strong>{parameter.name}</strong></p>

				<div class="frame-carousel">
					{parameter.options.map(({ label, asset }) =>
						<label class={"thumbnail-select" + " " + label.split(" ").join("-").toLowerCase()} for={label} onClick={() => updatePreview(label.split(" ").join("-").toLowerCase())}>
							<img src={asset} alt="label" />
							<p>{label}</p>
						</label>
					)}
				</div>

			</article>)


	} else {

	}

	return thumbnails;

}

var lastScrollTop = 0;
function scrollPreview() {

	let preview = document.querySelector("#live-preview");
	let main = document.getElementById("print-panel-main");

	var st = main.scrollTop;
	console.log("st is" + st)
	// console.log(document.getElementById("print-panel").getBoundingClientRect().top)
	// console.log(document.getElementById("everything-else").getBoundingClientRect().top)
	// var gr = document.getElementById("everything-else").getBoundingClientRect().top;
	// console.log(preview.getBoundingClientRect().bottom);
	// // var newst = document.getElementById()
	// //    console.log(st);
	// console.log("ST is: " + st);
	// if (Math.abs(st - lastScrollTop) > 100) {
	// console.log("SCROLL TOP is: " + lastScrollTop)
	// if (Math.abs(st - lastScrollTop) > 20) {
		console.log("preview is " + preview.getBoundingClientRect().bottom);
	if (st < 10 && preview.getBoundingClientRect().bottom < 320) {
		// console.log("up");
		preview.classList.remove("smaller");

		preview.classList.remove("shrunk");
		// setTimeout(1000);

	} else if (st > lastScrollTop) {
		preview.classList.add("smaller");
		setTimeout(() => {
			preview.classList.add("shrunk");
			main.removeEventListener("onscroll", scrollPreview);
		}, "20");

	} else {

	}
	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	// }
	if (st > 300) {
		document.getElementById("print-panel-footer").style.boxShadow = "none";
	} else {
		// console.log("over")
		document.getElementById("print-panel-footer").style.boxShadow = "0px -2px 4px 0px #0E131810";
	}

	// }, false);
}

function updateChevrons() {
	let left = document.getElementById("left");
	let right = document.getElementById("right");
	let preview = document.querySelector("#live-preview");

	let leftLimit = preview.scrollLeft;
	let rightLimit = Math.abs(preview.scrollWidth - preview.scrollLeft - preview.clientWidth);

	if (leftLimit < 100) {
		left.classList.add("hidden");
	} else {
		left.classList.remove("hidden");
	}

	if (rightLimit < 120) {
		right.classList.add("hidden");
	} else {
		right.classList.remove("hidden");
	}

}

function scrollChevrons(direction) {
	let preview = document.querySelector("#live-preview");

	if (direction == "left") {
		preview.scrollBy(-200, 0);
	} else if (direction == "right") {
		preview.scrollBy(200, 0);
	}
}


function updateSize(newParam) {
	currentSelection.size = newParam;
	let allSizes = document.querySelectorAll(".size-option")
	for (let i = 0; i < allSizes.length; i++) {
		if (allSizes[i].classList.contains(currentSelection.size)) {
			// allFrames[i].style.backgroundColor = "blue";
			allSizes[i].classList.add("active");
		} else {
			// allFrames[i].style.backgroundColor = "green";
			allSizes[i].classList.remove("active");
		}
	}
	// console.log(currentSelection.size);

	openFlyout();
	// console.log(currentSelection.size);
	document.querySelector("div.select.size p").innerHTML = newParam.charAt(0).toUpperCase() + newParam.slice(1);
	updateLivePreview();

	// return;
}

function updatePreview(newParam) {
	// update the current selection;
	currentSelection.frame = newParam;


	// updates the frames;
	let allFrames = document.querySelectorAll(".thumbnail-select");
	for (let i = 0; i < allFrames.length; i++) {
		if (allFrames[i].classList.contains(currentSelection.frame)) {
			// allFrames[i].style.backgroundColor = "blue";
			allFrames[i].classList.add("active");
		} else {
			// allFrames[i].style.backgroundColor = "green";
			allFrames[i].classList.remove("active");
		}
	}
	updateLivePreview();
	// console.log(currentSelection.frame);
}

function openPrintPanel() {
	let main = document.getElementsByTagName("main")[0];
	let printPanel = document.getElementById("print-panel");
	
	if (main.classList.contains("start") && printPanel.classList.contains("start")) {
		main.classList.remove("start");
		printPanel.classList.remove("start");
	} else {
		main.classList.add("start");
		printPanel.classList.add("start");
	}
}


function App() {
	// updateSize("small");
	// updatePreview("no-frame");

	return (

		<body>
			{/* HEADER */}
			<header id="canva-header">
				<div class="button-container">
					<button class="dark tertiary icon text">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.4542 17.9724L9.4876 12.0058C9.38997 11.9082 9.38997 11.7499 9.4876 11.6523L15.3595 5.78036C15.6524 5.48747 15.6524 5.01259 15.3595 4.7197C15.0666 4.42681 14.5917 4.42681 14.2988 4.7197L8.42694 10.5916C7.74352 11.275 7.74352 12.383 8.42694 13.0665L14.3935 19.033C14.6864 19.3259 15.1613 19.3259 15.4542 19.033C15.7471 18.7401 15.7471 18.2653 15.4542 17.9724Z" fill="white" />
						</svg>
						Home
					</button>
					<button class="dark tertiary text">
						File
					</button>
					<button class="dark tertiary text">
						Resize
					</button>
					<button class="dark tertiary icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M6.07223 8.75L8.31866 10.9964C8.61155 11.2893 8.61155 11.7642 8.31866 12.0571C8.02576 12.35 7.55089 12.35 7.25799 12.0571L4.42663 9.22572C3.74321 8.5423 3.74321 7.43426 4.42663 6.75084L7.2078 3.96967C7.50069 3.67678 7.97557 3.67678 8.26846 3.96967C8.56135 4.26256 8.56135 4.73744 8.26846 5.03033L6.04879 7.25H15.9998C19.1755 7.25 21.7498 9.82436 21.7498 13C21.7498 16.1756 19.1755 18.75 15.9998 18.75H11.9998C11.5856 18.75 11.2498 18.4142 11.2498 18C11.2498 17.5858 11.5856 17.25 11.9998 17.25H15.9998C18.3471 17.25 20.2498 15.3472 20.2498 13C20.2498 10.6528 18.3471 8.75 15.9998 8.75H6.07223Z" fill="white" />
						</svg>

					</button>
					<button class="dark tertiary icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5918 8.75L17.3454 10.9964C17.0525 11.2893 17.0525 11.7642 17.3454 12.0571C17.6383 12.35 18.1132 12.35 18.4061 12.0571L21.2374 9.22572C21.9209 8.5423 21.9209 7.43426 21.2374 6.75084L18.4563 3.96967C18.1634 3.67678 17.6885 3.67678 17.3956 3.96967C17.1027 4.26256 17.1027 4.73744 17.3956 5.03033L19.6153 7.25H9.66421C6.48858 7.25 3.91421 9.82436 3.91421 13C3.91421 16.1756 6.48858 18.75 9.66421 18.75H13.6642C14.0784 18.75 14.4142 18.4142 14.4142 18C14.4142 17.5858 14.0784 17.25 13.6642 17.25H9.66421C7.317 17.25 5.41421 15.3472 5.41421 13C5.41421 10.6528 7.317 8.75 9.66421 8.75H19.5918Z" fill="white" fill-opacity="0.4" />
						</svg>

					</button>
					<button class="dark tertiary icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9997 3C9.46712 3.00011 7.99271 3.58664 6.87888 4.63929C5.76506 5.69195 5.09625 7.13091 5.00966 8.661C3.81054 9.148 2.81595 10.0335 2.1935 11.1682C1.57105 12.303 1.3588 13.6176 1.59251 14.8906C1.82623 16.1635 2.49161 17.317 3.47655 18.1566C4.46148 18.9963 5.70575 19.4707 6.99966 19.5V19.501H16.9997V19.5C18.2289 19.473 19.4155 19.044 20.3778 18.2786C21.3401 17.5132 22.0251 16.4535 22.3279 15.2619C22.6308 14.0702 22.5348 12.8121 22.0548 11.6801C21.5747 10.5481 20.7369 9.60462 19.6697 8.994L18.5557 10.108C19.4278 10.4978 20.1376 11.1782 20.564 12.033C20.9904 12.8878 21.107 13.8641 20.8939 14.7953C20.6808 15.7265 20.1512 16.5549 19.3954 17.1392C18.6396 17.7234 17.7045 18.0273 16.7497 17.999V18H7.24966V17.998C6.19428 18.0289 5.16724 17.6539 4.38003 16.9503C3.59283 16.2467 3.10539 15.268 3.01811 14.2158C2.93084 13.1635 3.25036 12.1179 3.91087 11.2942C4.57139 10.4705 5.52262 9.93142 6.56866 9.788C6.37376 8.70367 6.58341 7.58552 7.15788 6.64545C7.73235 5.70537 8.63173 5.0087 9.68556 4.68746C10.7394 4.36622 11.8744 4.44274 12.8756 4.9025C13.8768 5.36226 14.6746 6.17333 15.1177 7.182L16.2337 6.065C15.7123 5.13506 14.9526 4.36088 14.0326 3.82215C13.1127 3.28343 12.0658 2.99964 10.9997 3ZM18.6307 7.91C18.7026 7.84128 18.7602 7.75893 18.8 7.66775C18.8398 7.57657 18.8611 7.47838 18.8626 7.3789C18.864 7.27942 18.8457 7.18063 18.8087 7.0883C18.7716 6.99596 18.7166 6.91192 18.6467 6.84107C18.5769 6.77023 18.4936 6.71398 18.4018 6.67563C18.31 6.63727 18.2115 6.61756 18.112 6.61764C18.0125 6.61773 17.914 6.63761 17.8223 6.67613C17.7305 6.71465 17.6474 6.77103 17.5777 6.842L10.6697 13.75L8.73966 11.82C8.67351 11.7429 8.5924 11.6801 8.50124 11.6353C8.41007 11.5905 8.31076 11.5647 8.20932 11.5594C8.10789 11.5542 8.00644 11.5696 7.91114 11.6047C7.81583 11.6398 7.72865 11.6939 7.65489 11.7638C7.58113 11.8336 7.52232 11.9177 7.48203 12.0109C7.44174 12.1042 7.42081 12.2046 7.42051 12.3062C7.42021 12.4078 7.44054 12.5083 7.48027 12.6018C7.52001 12.6953 7.57832 12.7797 7.65166 12.85L7.65066 12.852L10.0947 15.297C10.1622 15.377 10.2457 15.442 10.3399 15.4876C10.4341 15.5333 10.5368 15.5587 10.6414 15.5622C10.7461 15.5657 10.8503 15.5472 10.9473 15.5079C11.0443 15.4686 11.132 15.4093 11.2047 15.334V15.335L18.6297 7.911L18.6307 7.91Z" fill="white" fill-opacity="0.7" />
						</svg>

					</button>
				</div>


				<div class="button-container">
					<input value="Vacation time" />
					<button class="dark secondary icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V18H7.75V11.75C7.75 11.3358 7.41421 11 7 11C6.58579 11 6.25 11.3358 6.25 11.75V18H2.75C2.33579 18 2 18.3358 2 18.75C2 19.1642 2.33579 19.5 2.75 19.5H21.25C21.6642 19.5 22 19.1642 22 18.75C22 18.3358 21.6642 18 21.25 18H17.75V7.75C17.75 7.33579 17.4142 7 17 7C16.5858 7 16.25 7.33579 16.25 7.75V18H12.75V3.75Z" fill="white" />
						</svg>
					</button>
					<button class="dark secondary icon text" onClick={() => openPrintPanel()}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17 2H7C5.89543 2 5 2.89543 5 4V16.0852V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V14.0234V4C19 2.89543 18.1046 2 17 2ZM16.3714 10.7863L17.5 12.1762V4C17.5 3.72386 17.2761 3.5 17 3.5H7C6.72386 3.5 6.5 3.72386 6.5 4V14.2104L6.88515 13.729C6.97441 13.6174 7.07538 13.5157 7.18632 13.4256C8.04389 12.7295 9.30344 12.8603 9.9996 13.7179L10.4631 14.2888L13.2573 10.7973C13.3464 10.6859 13.4473 10.5844 13.5581 10.4944C14.4155 9.79812 15.6751 9.92879 16.3714 10.7863ZM17.5 20V14.5557L15.2069 11.7318C15.0329 11.5175 14.718 11.4848 14.5036 11.6589C14.4759 11.6814 14.4507 11.7067 14.4284 11.7346L11.4305 15.4806L15.5052 20.5H17C17.2761 20.5 17.5 20.2761 17.5 20ZM13.5732 20.5H7C6.72386 20.5 6.5 20.2762 6.5 20V16.6115L8.05641 14.6661C8.07873 14.6382 8.10397 14.6128 8.1317 14.5903C8.3461 14.4162 8.66098 14.4489 8.83503 14.6633L13.5732 20.5ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5Z" fill="white" />
						</svg>
						Print Posters
					</button>
					<button class="dark primary icon text">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.5 11.745V18.995C4.5 19.275 4.72 19.495 5 19.495H19C19.1326 19.495 19.2598 19.4423 19.3536 19.3486C19.4473 19.2548 19.5 19.1276 19.5 18.995V11.745C19.5 11.5461 19.579 11.3553 19.7197 11.2147C19.8603 11.074 20.0511 10.995 20.25 10.995C20.4489 10.995 20.6397 11.074 20.7803 11.2147C20.921 11.3553 21 11.5461 21 11.745V18.995C21 19.5254 20.7893 20.0341 20.4142 20.4092C20.0391 20.7843 19.5304 20.995 19 20.995H5C4.46957 20.995 3.96086 20.7843 3.58579 20.4092C3.21071 20.0341 3 19.5254 3 18.995V11.745C3 11.5461 3.07902 11.3553 3.21967 11.2147C3.36032 11.074 3.55109 10.995 3.75 10.995C3.94891 10.995 4.13968 11.074 4.28033 11.2147C4.42098 11.3553 4.5 11.5461 4.5 11.745ZM12.82 4.545V14.245C12.82 14.4439 12.741 14.6347 12.6003 14.7753C12.4597 14.916 12.2689 14.995 12.07 14.995C11.8711 14.995 11.6803 14.916 11.5397 14.7753C11.399 14.6347 11.32 14.4439 11.32 14.245V4.545L8.28 7.775C8.13783 7.90748 7.94978 7.9796 7.75548 7.97618C7.56118 7.97275 7.37579 7.89403 7.23838 7.75662C7.10097 7.61921 7.02225 7.43382 7.01883 7.23952C7.0154 7.04522 7.08752 6.85717 7.22 6.715L11.54 2.225C11.84 1.925 12.31 1.925 12.6 2.225L16.78 6.725C16.8612 6.79159 16.9275 6.87449 16.9746 6.96833C17.0218 7.06218 17.0487 7.16487 17.0536 7.26977C17.0585 7.37466 17.0413 7.47942 17.0032 7.57726C16.9651 7.67511 16.9068 7.76385 16.8322 7.83775C16.7576 7.91166 16.6683 7.96907 16.5701 8.00627C16.4719 8.04347 16.367 8.05964 16.2621 8.05373C16.1573 8.04781 16.0549 8.01994 15.9615 7.97193C15.8681 7.92392 15.7858 7.85682 15.72 7.775L12.82 4.565V4.545Z" fill="#0E1318" />
						</svg>
						Share
					</button>
				</div>

			</header>

			<main class="start">
				<section id="object-panel">
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM4.5 5C4.5 4.72386 4.72386 4.5 5 4.5H13V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5ZM14.5 10V4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V10H14.5ZM14.5 11.5V19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V11.5H14.5Z" fill="white" fill-opacity="0.7" />
						</svg>
						Design
					</button>
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5002 2C17.7772 2 18.0316 2.15266 18.162 2.39706L22.162 9.89706C22.286 10.1295 22.2789 10.41 22.1433 10.6359C22.0078 10.8618 21.7637 11 21.5002 11H13.5002C13.2368 11 12.9927 10.8618 12.8571 10.6359C12.7216 10.41 12.7145 10.1295 12.8385 9.89706L16.8385 2.39706C16.9688 2.15266 17.2232 2 17.5002 2ZM4.25023 3.62868C3.88653 3.62868 3.53773 3.77316 3.28056 4.03033C3.02338 4.2875 2.87891 4.6363 2.87891 5C2.87891 5.3637 3.02338 5.7125 3.28056 5.96967L6.50023 9.18934L9.7199 5.96967C9.97707 5.7125 10.1215 5.3637 10.1215 5C10.1215 4.6363 9.97707 4.2875 9.7199 4.03033C9.46272 3.77316 9.11392 3.62868 8.75023 3.62868C8.38654 3.62868 8.03774 3.77315 7.78057 4.03032C7.78056 4.03032 7.78056 4.03033 7.78056 4.03033L7.03059 4.78034C6.88994 4.92099 6.69917 5.00002 6.50025 5.00002C6.30134 5.00002 6.11057 4.921 5.96991 4.78035L5.2199 4.03033C4.96272 3.77316 4.61392 3.62868 4.25023 3.62868ZM2.2199 2.96967C2.75837 2.43119 3.48871 2.12868 4.25023 2.12868C5.01175 2.12868 5.74208 2.43119 6.28056 2.96967L6.50023 3.18934L6.71988 2.96968L6.7199 2.96967C7.25837 2.43119 7.98871 2.12868 8.75023 2.12868C9.51175 2.12868 10.2421 2.43119 10.7806 2.96967C11.319 3.50815 11.6215 4.23848 11.6215 5C11.6215 5.76152 11.319 6.49185 10.7806 7.03033L7.03056 10.7803C6.73766 11.0732 6.26279 11.0732 5.9699 10.7803L2.2199 7.03033C1.68142 6.49185 1.37891 5.76152 1.37891 5C1.37891 4.23848 1.68142 3.50815 2.2199 2.96967ZM14.7502 9.5H20.2502L17.5002 4.34375L14.7502 9.5ZM14.1415 14.1412C15.0323 13.2504 16.2404 12.75 17.5002 12.75C18.76 12.75 19.9682 13.2504 20.859 14.1412C21.7498 15.032 22.2502 16.2402 22.2502 17.5C22.2502 18.7598 21.7498 19.968 20.859 20.8588C19.9682 21.7496 18.76 22.25 17.5002 22.25C16.2404 22.25 15.0323 21.7496 14.1415 20.8588C13.2507 19.968 12.7502 18.7598 12.7502 17.5C12.7502 16.2402 13.2507 15.032 14.1415 14.1412ZM17.5002 14.25C16.6383 14.25 15.8116 14.5924 15.2021 15.2019C14.5926 15.8114 14.2502 16.638 14.2502 17.5C14.2502 18.362 14.5926 19.1886 15.2021 19.7981C15.8116 20.4076 16.6383 20.75 17.5002 20.75C18.3622 20.75 19.1888 20.4076 19.7983 19.7981C20.4078 19.1886 20.7502 18.362 20.7502 17.5C20.7502 16.638 20.4078 15.8114 19.7983 15.2019C19.1888 14.5924 18.3622 14.25 17.5002 14.25ZM2.00023 13.75C2.00023 13.3358 2.33601 13 2.75023 13H10.2502C10.6644 13 11.0002 13.3358 11.0002 13.75V21.25C11.0002 21.6642 10.6644 22 10.2502 22H2.75023C2.33601 22 2.00023 21.6642 2.00023 21.25V13.75ZM3.50023 14.5V20.5H9.50023V14.5H3.50023Z" fill="white" fill-opacity="0.7" />
						</svg>
						Elements
					</button>
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 6C18.5 5.72386 18.2761 5.5 18 5.5H12.75V18C12.75 18.2761 12.9739 18.5 13.25 18.5H15.25C15.6642 18.5 16 18.8358 16 19.25C16 19.6642 15.6642 20 15.25 20H8.75C8.33579 20 8 19.6642 8 19.25C8 18.8358 8.33579 18.5 8.75 18.5H10.75C11.0261 18.5 11.25 18.2761 11.25 18V5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V7.25C5.5 7.66421 5.16421 8 4.75 8C4.33579 8 4 7.66421 4 7.25V5.5C4 4.67157 4.67157 4 5.5 4H18.5C19.3284 4 20 4.67157 20 5.5V7.25C20 7.66421 19.6642 8 19.25 8C18.8358 8 18.5 7.66421 18.5 7.25V6Z" fill="white" fill-opacity="0.7" />
						</svg>
						Text
					</button>
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 19.4877C3.81824 19.2947 1.5 16.8556 1.5 13.875C1.5 11.5167 2.95125 9.49741 5.00939 8.66141C5.18497 5.50522 7.79992 3 11 3C14.0599 3 16.5848 5.29054 16.9536 8.25054C20.024 8.29262 22.5 10.7947 22.5 13.875C22.5 16.8556 20.1818 19.2947 17.25 19.4877V19.5H16.875H15V18H16.75V17.9981C16.7915 17.9994 16.8332 18 16.875 18C19.1532 18 21 16.1532 21 13.875C21 11.5968 19.1532 9.75 16.875 9.75C16.3484 9.75 15.8449 9.84867 15.3819 10.0285C15.4592 9.69819 15.5 9.35386 15.5 9C15.5 6.51472 13.4853 4.5 11 4.5C8.51472 4.5 6.5 6.51472 6.5 9C6.5 9.26854 6.52352 9.53159 6.56862 9.7872C4.55357 10.0589 3 11.7855 3 13.875C3 16.1532 4.84683 18 7.125 18C7.16681 18 7.20848 17.9994 7.25 17.9981V18H9V19.5H7.125H6.75V19.4877ZM12.75 13.8107L14.5455 15.6062C14.8384 15.8991 15.3133 15.8991 15.6062 15.6062C15.8991 15.3133 15.8991 14.8384 15.6062 14.5455L13.2554 12.1947C12.572 11.5113 11.4639 11.5113 10.7805 12.1947L8.42969 14.5455C8.13679 14.8384 8.13679 15.3133 8.42969 15.6062C8.72258 15.8991 9.19745 15.8991 9.49035 15.6062L11.25 13.8465V21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25V13.8107Z" fill="white" fill-opacity="0.7" />
						</svg>
						Uploads
					</button>
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5585 4H4C2.89543 4 2 4.89543 2 6V8C2 8.15275 2.01712 8.30151 2.04956 8.44444C2.01712 8.57717 2 8.7153 2 8.85714V18.1429C2 19.1685 2.89543 20 4 20H20C21.1046 20 22 19.1685 22 18.1429V8.85714C22 7.83147 21.1046 7 20 7H13L12.4558 5.36754C12.1836 4.55086 11.4193 4 10.5585 4ZM4 7H11.4189L11.0328 5.84189C10.9648 5.63771 10.7737 5.5 10.5585 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V7.05851C3.65981 7.02031 3.82735 7 4 7ZM3.5 8.85714C3.5 8.68575 3.70004 8.5 4 8.5H20C20.3 8.5 20.5 8.68575 20.5 8.85714V18.1429C20.5 18.3142 20.3 18.5 20 18.5H4C3.70004 18.5 3.5 18.3142 3.5 18.1429V8.85714Z" fill="white" fill-opacity="0.7" />
						</svg>
						Projects
					</button>
					<button class="app">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="white" fill-opacity="0.7" />
						</svg>
						Apps
					</button>
				</section>
				<section id="editor">


					{/* <section id="canvas"> */}
					<section id="toolbar">
						<button>
							{/* HELP LOL */}
							<img style={{ padding: "0px 12px" }} src={colorSelectSwatch} />
						</button>
						<button class="dark tertiary icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2H13C14.6569 2 16 3.34315 16 5H19H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H19V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V6.5H3.75C3.33579 6.5 3 6.16421 3 5.75C3 5.33579 3.33579 5 3.75 5H5H8C8 3.34315 9.34315 2 11 2ZM6.5 6.5H8H16H17.5V18C17.5 18.8284 16.8284 19.5 16 19.5H8C7.17157 19.5 6.5 18.8284 6.5 18V6.5ZM14.5 5H9.5C9.5 4.17157 10.1716 3.5 11 3.5H13C13.8284 3.5 14.5 4.17157 14.5 5ZM9.25 9H10.75V17H9.25V9ZM14.75 9H13.25V17H14.75V9Z" fill="#0E1318" />
							</svg>
						</button>
					</section>
					<section id="design-area">
						<div id="canvas-area"></div>
						{/* help again lol */}
						<image src="public/assets/Toolbar/design.png" />
					</section>
					<section id="page-handling">
						<section id="page-thumbnail">

						</section>
						<section id="page-toolbar">
							<button class="light tertiary text">
								Notes
							</button>

							<div class="button-container small">
								<svg width="150" height="14" viewBox="0 0 150 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="6" width="150" height="2" rx="1" fill="#0E1318" fill-opacity="0.15" />
									<rect y="6" width="75" height="2" rx="1" fill="#0E1318" />
									<path d="M75 13C78.3137 13 81 10.3137 81 7C81 3.68629 78.3137 1 75 1C71.6863 1 69 3.68629 69 7C69 10.3137 71.6863 13 75 13Z" fill="#1D232D" stroke="white" stroke-width="2" />
								</svg>
								<button class="light tertiary text">
									80%
								</button>
								<button class="light tertiary icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="1.75" y="4.75" width="17.5" height="17.5" rx="1.25" stroke="#0E1318" stroke-width="1.5" />
										<path d="M8.23926 17V15.833H9.96289V11.3896L9.85059 11.3604C9.60645 11.4775 9.36556 11.5703 9.12793 11.6387C8.89355 11.707 8.625 11.7607 8.32227 11.7998V10.5938C9.11328 10.4277 9.75293 10.1836 10.2412 9.86133H11.3594V15.833H12.8975V17H8.23926Z" fill="black" />
										<path d="M4.75 1C4.33579 1 4 1.33579 4 1.75C4 2.16421 4.33579 2.5 4.75 2.5H19.4C20.5598 2.5 21.5 3.4402 21.5 4.6V19.25C21.5 19.6642 21.8358 20 22.25 20C22.6642 20 23 19.6642 23 19.25V4.2C23 2.43269 21.5673 1 19.8 1H4.75Z" fill="#0E1318" />
									</svg>
								</button>
								<button class="light tertiary icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6355 10.43L18.501 6.5645V9.25198C18.501 9.66619 18.8368 10.002 19.251 10.002C19.6652 10.002 20.001 9.66619 20.001 9.25198L20.001 5.49749C20.001 4.53099 19.4705 4.00195 18.504 4.00195L14.7553 4.00195C14.3411 4.00195 14.0054 4.33774 14.0054 4.75195C14.0054 5.16617 14.3411 5.50195 14.7553 5.50195L17.4422 5.50195L13.5749 9.36931C13.282 9.6622 13.282 10.1371 13.5749 10.43C13.8678 10.7229 14.3426 10.7229 14.6355 10.43ZM9.36579 13.5689L5.49902 17.4357L5.49902 14.7482C5.49902 14.334 5.16324 13.9982 4.74902 13.9982C4.33481 13.9982 3.99902 14.334 3.99902 14.7482L3.99902 18.4989C3.99902 19.4654 4.52585 19.9982 5.49235 19.9982L9.24472 19.9982C9.65893 19.9982 9.99466 19.6624 9.99466 19.2482C9.99466 18.834 9.65893 18.4982 9.24472 18.4982H6.5578L10.4265 14.6295C10.7193 14.3367 10.7193 13.8618 10.4265 13.5689C10.1336 13.276 9.65869 13.276 9.36579 13.5689Z" fill="#0E1318" />
									</svg>
								</button>
								<button class="light tertiary icon">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM8.74609 9.84961H10.3525C10.4072 9.01562 10.9746 8.48242 11.8564 8.48242C12.7178 8.48242 13.292 8.99512 13.292 9.70605C13.292 10.3828 13.0049 10.7451 12.1572 11.2578C11.2139 11.8115 10.8174 12.4268 10.8789 13.4521L10.8857 13.917H12.4717V13.5273C12.4717 12.8506 12.7246 12.502 13.6201 11.9756C14.5498 11.4219 15.0693 10.6904 15.0693 9.64453C15.0693 8.13379 13.8184 7.05371 11.9453 7.05371C9.91504 7.05371 8.80078 8.22949 8.74609 9.84961ZM12.8887 16.0908C12.8887 16.7471 12.4512 17.1777 11.7539 17.1777C11.0703 17.1777 10.6191 16.7471 10.6191 16.0908C10.6191 15.4277 11.0703 14.9971 11.7539 14.9971C12.4512 14.9971 12.8887 15.4277 12.8887 16.0908Z" fill="#0E1318" />
									</svg>

								</button>
							</div>

						</section>
					</section>
					{/* </section> */}
				</section>
				<section id="print-panel" class="start">
					<section id="print-panel-nav">
						<div></div>
						<button id="tab">
							Posters
						</button>
						<div></div>
						<button class="light tertiary icon" onClick={() => openPrintPanel()}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.0604 11.9998L18.1868 17.1262C18.4797 17.419 18.4797 17.8939 18.1868 18.1868C17.8939 18.4797 17.419 18.4797 17.1262 18.1868L11.9998 13.0604L6.87336 18.1868C6.58047 18.4797 6.10559 18.4797 5.8127 18.1868C5.51981 17.8939 5.51981 17.419 5.8127 17.1262L10.9391 11.9998L5.81244 6.8731C5.51955 6.58021 5.51955 6.10534 5.81244 5.81244C6.10534 5.51955 6.58021 5.51955 6.8731 5.81244L11.9998 10.9391L17.1264 5.81244C17.4193 5.51955 17.8942 5.51955 18.1871 5.81244C18.48 6.10534 18.48 6.58021 18.1871 6.8731L13.0604 11.9998Z" fill="#191E26" />
							</svg>
						</button>
					</section>
					<section id="print-panel-main" onScroll={() => scrollPreview()}>


						<section id="live-preview" onScroll={() => updateChevrons()}>
							{createLivePreview()}
							<button id="left" class="chevron icon hidden" onClick={() => scrollChevrons("left")}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.53033 11.7127L5.9948 8.17719C5.89717 8.07956 5.89717 7.92126 5.9948 7.82363L9.53033 4.2881C9.82322 3.99521 9.82322 3.52033 9.53033 3.22744C9.23744 2.93455 8.76256 2.93455 8.46967 3.22744L4.93414 6.76297C4.25072 7.44639 4.25072 8.55443 4.93414 9.23785L8.46967 12.7734C8.76256 13.0663 9.23744 13.0663 9.53033 12.7734C9.82322 12.4805 9.82322 12.0056 9.53033 11.7127Z" fill="#191E26" />
								</svg>

							</button>
							<button id="right" class="chevron icon" onClick={() => scrollChevrons("right")}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.46967 4.28728L10.0052 7.82281C10.1028 7.92044 10.1028 8.07874 10.0052 8.17637L6.46967 11.7119C6.17678 12.0048 6.17678 12.4797 6.46967 12.7726C6.76256 13.0655 7.23744 13.0655 7.53033 12.7726L11.0659 9.23703C11.7493 8.55361 11.7493 7.44557 11.0659 6.76215L7.53033 3.22662C7.23744 2.93373 6.76256 2.93373 6.46967 3.22662C6.17678 3.51951 6.17678 3.99439 6.46967 4.28728Z" fill="#0E1318" />
								</svg>

							</button>
						</section>
						<section id="everything-else">
							{/* headline */}
							<h1>Print your designs on quality posters</h1>
							<div class="text-group">
								<i>Various sizes</i><i>•</i><i>Portrait</i>
							</div>


							{/* <article > */}
							<article>
								<p><strong>Select your pages to print</strong></p>
								<div class="select page">
									<img src={des} alt="page-select" />
									<p>Page 1</p>
									<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.7117 7.04975L8.17621 10.5853C8.07858 10.6829 7.92029 10.6829 7.82266 10.5853L4.28712 7.04975C3.99423 6.75685 3.51936 6.75685 3.22646 7.04975C2.93357 7.34264 2.93357 7.81751 3.22646 8.11041L6.762 11.6459C7.44541 12.3294 8.55345 12.3294 9.23687 11.6459L12.7724 8.11041C13.0653 7.81751 13.0653 7.34264 12.7724 7.04975C12.4795 6.75685 12.0046 6.75685 11.7117 7.04975Z" fill="#0D1216" />
									</svg>

								</div>
							</article>
							<article>
								<p><strong>What size?</strong></p>
								<div class="select size" onClick={() => openFlyout()}>
									<p>Small</p>
									<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.7117 7.04975L8.17621 10.5853C8.07858 10.6829 7.92029 10.6829 7.82266 10.5853L4.28712 7.04975C3.99423 6.75685 3.51936 6.75685 3.22646 7.04975C2.93357 7.34264 2.93357 7.81751 3.22646 8.11041L6.762 11.6459C7.44541 12.3294 8.55345 12.3294 9.23687 11.6459L12.7724 8.11041C13.0653 7.81751 13.0653 7.34264 12.7724 7.04975C12.4795 6.75685 12.0046 6.75685 11.7117 7.04975Z" fill="#0D1216" />
									</svg>
								</div>

							</article>

							{renderSelector(framing)}

							{/* </article> */}
							<article>
								<p><strong>How many?</strong></p>
								<div class="select quantity">
									<p>1 Poster</p>
									<p><strong>$-</strong></p>
									<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.7117 7.04975L8.17621 10.5853C8.07858 10.6829 7.92029 10.6829 7.82266 10.5853L4.28712 7.04975C3.99423 6.75685 3.51936 6.75685 3.22646 7.04975C2.93357 7.34264 2.93357 7.81751 3.22646 8.11041L6.762 11.6459C7.44541 12.3294 8.55345 12.3294 9.23687 11.6459L12.7724 8.11041C13.0653 7.81751 13.0653 7.34264 12.7724 7.04975C12.4795 6.75685 12.0046 6.75685 11.7117 7.04975Z" fill="#0D1216" />
									</svg>

								</div>
							</article>


							<div class="divider"></div>
							<article class="perk">
								<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 21.8823C6.59522 21.8823 2.19922 17.4853 2.19922 12.0813C2.19922 6.67727 6.59522 2.28027 12.0002 2.28027C17.4052 2.28027 21.8012 6.67627 21.8012 12.0813C21.8012 17.4863 17.4042 21.8823 12.0002 21.8823ZM16.1872 10.0503C16.1872 10.6086 15.7346 11.0613 15.1762 11.0613C14.6179 11.0613 14.1652 10.6086 14.1652 10.0503C14.1652 9.49191 14.6179 9.03927 15.1762 9.03927C15.7346 9.03927 16.1872 9.49191 16.1872 10.0503ZM8.82422 11.0613C9.38258 11.0613 9.83522 10.6087 9.83522 10.0503C9.83522 9.49195 9.38258 9.03931 8.82422 9.03931C8.26586 9.03931 7.81322 9.49195 7.81322 10.0503C7.81322 10.6087 8.26586 11.0613 8.82422 11.0613ZM16.2342 13.2443C14.4972 17.0243 9.57622 17.0983 7.76522 13.3393C7.27522 12.3223 5.76622 13.2103 6.25422 14.2223C8.60722 19.1063 15.4772 19.0643 17.7462 14.1273C18.2142 13.1093 16.7052 12.2193 16.2342 13.2443ZM3.69922 12.0813C3.69922 7.50427 7.42322 3.78027 12.0002 3.78027C16.5772 3.78027 20.3012 7.50427 20.3012 12.0813C20.3012 16.6583 16.5772 20.3823 12.0002 20.3823C7.42322 20.3823 3.69922 16.6583 3.69922 12.0813Z" fill="#0E1318" />
								</svg>
								<div>
									<p><strong>Happiness Guarantee</strong></p>
									<p>If you're not happy with your order contact us and we'll fix it, reprint it or refund it!</p>
								</div>
							</article>

						</section>

					</section>
					<section id="print-panel-footer">
						<div>
							<p><strong>Subtotal</strong></p>
							<p><strong>$-</strong></p>
						</div>
						<button class="light primary text">
							Continue
						</button>
					</section>
				</section>
			</main>

			<ul onLoad={() => updateSize("small")}>
				<li class="size-option small" value="0" onClick={() => updateSize("small")}>
					<p>Small
						<sub>
							12 x 16in
						</sub>
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.53 11.9 9 16.38 19.44 5.97a.75.75 0 0 1 1.06 1.06L9.53 17.97c-.3.29-.77.29-1.06 0l-5-5c-.7-.71.35-1.77 1.06-1.07z"></path></svg>
				</li>
				<li class="size-option medium" value="1" onClick={() => updateSize("medium")}>
					<p>Medium
						<sub>18 x 24in</sub>
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.53 11.9 9 16.38 19.44 5.97a.75.75 0 0 1 1.06 1.06L9.53 17.97c-.3.29-.77.29-1.06 0l-5-5c-.7-.71.35-1.77 1.06-1.07z"></path></svg>

				</li>
				<li class="size-option large" value="2" onClick={() => updateSize("large")}>
					<p>Large
						<sub>21 x 28in</sub>
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.53 11.9 9 16.38 19.44 5.97a.75.75 0 0 1 1.06 1.06L9.53 17.97c-.3.29-.77.29-1.06 0l-5-5c-.7-.71.35-1.77 1.06-1.07z"></path></svg>
				</li>
			</ul>
		</body>

	);
}


var currentSelection = {
	size: "small",
	size_code: "0",
	frame: "no-frame",
	frame_code: "2"
};

function openFlyout() {


	let selectComponent = document.querySelector(".select.size");

	let select = document.querySelector("ul");
	if (!select.classList.contains("active")) {
		select.classList.add("active");
		select.style.width = selectComponent.clientWidth + 2 + "px";
		select.style.left = selectComponent.getBoundingClientRect().left + "px";
		select.style.top = selectComponent.getBoundingClientRect().top + "px";

	} else {
		select.classList.remove("active");
	}


}



function updateLivePreview() {
	let previews = document.querySelectorAll("#live-preview img");
	for (let i = 0; i < previews.length; i++) {
		previews[i].src = previewSets[currentSelection.size + " " + currentSelection.frame][i];
		console.log(previewSets[currentSelection.size + " " + currentSelection.frame][i]);
	}
	if (currentSelection.frame == "no-frame") {
		previews[2].style.display = "none";
	} else {
		previews[2].style.display = "inline";
	}
	console.log("updated!");

}

function createLivePreview() {

	const previewBundle = previewSets[currentSelection.size + " " + currentSelection.frame];

	console.log(previewBundle);

	const listItems = previewBundle.map((preview) =>
		// <li>{number}</li>
		<img src={preview} />
	);

	return (listItems);
}


export default App;
