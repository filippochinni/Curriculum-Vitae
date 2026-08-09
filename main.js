import { DATA } from "./data.js";


let isDBClickEnabled = false;

const SECTION_ORDER = [
	"Presentation",
	"Education",
	"Work Experience",
	"Portfolio",
	"Skills",
	"Hard Skills List",
	"Awards",
	"Projects and Competitions",
	"Languages",
	"Studies and Courses List",
	"Competitive Sports",
];

main();

function main() {
	const mPageListDiv = document.getElementById('pageListDiv');

	const mPageDiv = document.getElementById('page');
	const mContentDiv = document.getElementById('pageContent');
	const mHeader = buildHeader(DATA.header);
	const mFooter = buildFooter(DATA.footer);

	mPageDiv.appendChild(mHeader);
	mPageDiv.appendChild(mContentDiv);


	for (const sectionData of DATA.sections) {
		const mSectionDiv = createElement('div', 'sectionDiv', `section-${sectionData.sectionTitle.replace(/\s+/g, '')}`);
		mContentDiv.appendChild(mSectionDiv);
		buildSection(mSectionDiv, sectionData);
		sortSections(mContentDiv);
	}
	const secretElements = buildSecretActions(DATA);
	secretElements.forEach(elem => mPageDiv.appendChild(elem));

	mContentDiv.appendChild(mFooter);
}

function buildSecretActions(data) {
	const secretLocationMenu = createElement('select', '', 'secretLocationMenu');
	const locationsData = data.header.locations;
	locationsData.forEach(loc => {
		const option = document.createElement('option');
        option.value = loc;
        option.text = loc;
        secretLocationMenu.appendChild(option);
    });
	secretLocationMenu.addEventListener('change', (e) => {
		const locationDisplay = document.getElementById('locationDiv');
		locationDisplay.innerHTML = parseText(`${e.target.value} ${data.header.locationInfo}`);
	});

	const removableDivsMenu = createElement('select', '', 'removableDivsMenu');
	const removableDivs = {
		0: document.createElement('option', '', 'removableDivsMenuPlaceholder'),
		1: document.querySelector("#section-Education .sectionContentDiv").lastChild,
	};
	for (const [key, div] of Object.entries(removableDivs)) {
		const option = document.createElement('option');
        option.value = key;
        option.text = div.querySelector('.entryTitleDiv')?.innerHTML;
        removableDivsMenu.appendChild(option);
	};
	const lambdaHandleDBClick = () => { if (isDBClickEnabled) selectedDiv.style.display = 'none'; };
	removableDivsMenu.addEventListener('change', (e) => {
		const selectedDiv = removableDivs[e.target.value];
		selectedDiv.addEventListener('dblclick', lambdaHandleDBClick);
		for (const key in removableDivs) {
			if (key !== e.target.value) {
				removableDivs[key].removeEventListener('dblclick', lambdaHandleDBClick);
			}
		}
	});

	const secretSlimModeSwitch = createElement('input', 'checkbox', 'secretSlimModeSwitch');
	secretSlimModeSwitch.type = 'checkbox';
	secretSlimModeSwitch.addEventListener('change', () => {
	const tableKeysDateDivs = document.querySelectorAll('.tableKeyDiv');
		tableKeysDateDivs.forEach(div => {
			div.classList.toggle('slimMode');
		});
	});

	const secretButton = createElement('button', '', 'secretButton');
	secretButton.addEventListener('dblclick', () => {
		alert(`Secret Button!\n` + `Editing is now ${isDBClickEnabled ? "Disabled" : "Enabled"}!`);
		isDBClickEnabled = !isDBClickEnabled;
		secretLocationMenu.style.display = (secretLocationMenu.style.display === 'block') ? 'none' : 'block';
		removableDivsMenu.style.display = (removableDivsMenu.style.display === 'block') ? 'none' : 'block';
		secretSlimModeSwitch.style.display = (secretSlimModeSwitch.style.display === 'block') ? 'none' : 'block';
	});

	return [secretButton, secretLocationMenu, removableDivsMenu, secretSlimModeSwitch];
}

function sortSections(contentDiv) {
	const sections = Array.from(contentDiv.getElementsByClassName('sectionDiv'));
	sections.sort((a, b) => {
		const aTitle = a.querySelector('.sectionTitle').textContent;
		const bTitle = b.querySelector('.sectionTitle').textContent;

		const aIndex = SECTION_ORDER.indexOf(aTitle);
		const bIndex = SECTION_ORDER.indexOf(bTitle);

		return aIndex - bIndex;
	});
	sections.forEach(section => contentDiv.appendChild(section));
	return contentDiv;
}

function buildHeader(headerData) {
	const mHeader = document.getElementsByTagName('header')[0];

	const mainHeaderDiv = document.getElementById('mainHeaderDiv');
	const profilePicDiv = document.getElementById('profilePicDiv');
	const headerInfoDiv = document.getElementById('headerInfoDiv');
	const headerNameDiv = document.getElementById('headerNameDiv');

	const nationalityDiv = createElement('div', 'headerMinorInfoDiv');
	const birthDateDiv = createElement('div', 'headerMinorInfoDiv');
	const locationDiv = createElement('div', 'headerMinorInfoDiv');
	const emailDiv = createElement('div', 'headerMinorInfoDiv');

	mainHeaderDiv.appendChild(profilePicDiv);
	mainHeaderDiv.appendChild(headerInfoDiv);
	headerInfoDiv.appendChild(headerNameDiv);

	profilePicDiv.children[0].innerHTML = `<img src="${headerData.picture}" alt="Profile Picture">`;
	headerNameDiv.innerHTML = `${parseText(headerData.fullName)}`;

	headerInfoDiv.appendChild(buildHeaderTableLayout([
		{ icon: "&#x1F4C5", info: "Birth Date:", content: headerData.birthDate },
		{ icon: "&#x1F310", info: "Nationality:",  content: headerData.nationality },
		{ icon: "&#x1F30D", info: "Location:", content: `<span id="locationDiv">${headerData.location} ${headerData.locationInfo}</span>` },
		{ icon: "&#128231", info: "Email:", content: headerData.email },
		{ icon: "&#128188", info: "Other:", content: headerData.other }
	]));

	return mHeader;
}

function buildFooter(footerData) {
	const mFooter = createElement('footer');
	const bottomFooterDiv = createElement('div', 'footerElem', 'bottomFooterDiv');
	const signatureDiv = createElement('div', 'footerElem', 'signatureDiv');
	const signatureContainerDiv = createElement('div', 'footerElem', 'signatureContainerDiv');
	const fullCVPageUrlDiv = createElement('div', 'footerElem', 'fullCVPageUrlDiv');
	const lawDiv = createElement('div', 'footerElem', 'lawDiv');
	const dateDiv = createElement('div', 'footerElem', 'dateDiv');

	signatureDiv.innerHTML = `<img src="${footerData.signature}" alt="Signature">`;

	fullCVPageUrlDiv.innerHTML = parseText(footerData.pageUrl);

	lawDiv.innerHTML = parseText(footerData.law);
	dateDiv.innerHTML = parseText(footerData.date);

	signatureContainerDiv.appendChild(signatureDiv);
	mFooter.appendChild(createElement('div', 'sectionTitleDeco'));
	mFooter.appendChild(fullCVPageUrlDiv);
	fullCVPageUrlDiv.appendChild(createElement('div', 'sectionTitleDeco'));
	mFooter.appendChild(lawDiv);
	bottomFooterDiv.appendChild(dateDiv);
	bottomFooterDiv.appendChild(signatureContainerDiv);
	mFooter.appendChild(bottomFooterDiv);

	return mFooter;
}

function buildHeaderTableLayout(rows) {
	const tableLayout = createElement('div', 'tableLayout');
	const listLayout = createElement('div', 'tableLayoutList');

	for (const row of rows) {
		const rowLayout = createElement('div', 'tableLayoutRow');
		for (const elem in row) {
			const elemDiv = createElement('div');
			elemDiv.innerHTML = parseText(row[elem]);
			rowLayout.appendChild(elemDiv);
		}
		listLayout.appendChild(rowLayout);
	}
	tableLayout.appendChild(listLayout);
	return tableLayout;
}

function buildSection(sectionDiv, sectionData) {
	const sectionTitleDiv = createElement('div', 'sectionTitleDiv');
	const sectionTitle = createElement('div', 'sectionTitle');
	const sectionTitleDeco = createElement('div', 'sectionTitleDeco');
	const sectionContentDiv = createElement('div', 'sectionContentDiv');
	sectionTitle.innerHTML = parseText(sectionData.sectionTitle);
	sectionTitleDiv.appendChild(sectionTitle);
	sectionTitleDiv.appendChild(sectionTitleDeco);

	sectionDiv.appendChild(sectionTitleDiv);
	sectionDiv.appendChild(sectionContentDiv);

	sectionTitleDiv.addEventListener('click', () => {
		const isExpanded = getComputedStyle(sectionContentDiv).display !== 'none';
		sectionContentDiv.style.display = isExpanded ? 'none' : 'flex';
	});

	switch (sectionData.type) {
		case "text-only":
			buildSectionText(sectionContentDiv, sectionData.content);
			break;
		case "generic-table":
			buildSectionTable(sectionContentDiv, sectionData.content);
			break;
		case "bullet-lists":
			buildSectionBullet(sectionContentDiv, sectionData.content);
			break;
		case "nested-lists":
			buildSectionNested(sectionContentDiv, sectionData.content);
			break;
		case "entries-list":
			buildSectionEntries(sectionContentDiv, sectionData.content);
			break;
		default:
			console.error(`Unknown section type: ${sectionData.type}`);
	}
	return sectionDiv;
}

function buildSectionText(sectionContentDiv, sectionContent) {
	sectionContentDiv.innerHTML = parseText(sectionContent);
	return sectionContentDiv;
}

function buildSectionTable(sectionContentDiv, sectionContent) {
	for (const entry of sectionContent) {
		const tableEntryDiv = createElement('div', 'tableEntryDiv');
		const tableKeyDiv = createElement('div', 'tableKeyDiv');
		const tableIconDiv = createElement('div', 'entryIconDiv');
		const entryDiv = createElement('div', 'entryDiv');

		sectionContentDiv.appendChild(tableEntryDiv);

		tableEntryDiv.appendChild(tableIconDiv);
		tableEntryDiv.appendChild(tableKeyDiv);
		tableEntryDiv.appendChild(entryDiv);

		tableKeyDiv.innerHTML = parseText(entry?.entryKey);
		tableIconDiv.innerHTML = entry?.icon ? parseIcon(entry.icon) : "";
		buildEntryDiv(entryDiv, entry);

		tableIconDiv.addEventListener('click', () => {
			if (entryDiv.classList.contains('collapsed')) {
				entryDiv.classList.remove('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'block';
				}
				tableEntryDiv.style.alignItems = 'flex-start';
			} else {
				entryDiv.classList.add('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'none';
				}
				tableEntryDiv.style.alignItems = 'center';
				entryDiv.firstChild.style.display = 'block';
			}
		});
	}
	return sectionContentDiv;
}

function buildSectionEntries(sectionContentDiv, sectionContent) {
	for (const entry of sectionContent) {
		const entryDiv = createElement('div', 'entryDiv');

		sectionContentDiv.appendChild(entryDiv);
		buildEntryDiv(entryDiv, entry);

		entryDiv.firstChild.addEventListener('click', () => {
			if (entryDiv.classList.contains('collapsed')) {
				entryDiv.classList.remove('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'block';
				}
			} else {
				entryDiv.classList.add('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'none';
				}
				entryDiv.firstChild.style.display = 'block';
			}
		});
	}
	return sectionContentDiv;
}

function buildSectionBullet(sectionContentDiv, sectionContent) {
	for (const entry of sectionContent) {
		const entryDiv = createElement('div', 'entryDiv');
		const entryTitleDiv = createElement('div', 'entryTitleDiv');
		const h1ListDiv = createElement('div', 'innerListDivH1');
		const innerEntryBulletList = createElement('ul', 'innerEntryBulletList');

		sectionContentDiv.appendChild(entryDiv);

		entryTitleDiv.innerHTML = parseText(entry.h1);
		entryDiv.appendChild(entryTitleDiv);
		entryDiv.appendChild(h1ListDiv);

		entryDiv.firstChild.addEventListener('click', () => {
			if (entryDiv.classList.contains('collapsed')) {
				entryDiv.classList.remove('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'flex';
				}
			} else {
				entryDiv.classList.add('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'none';
				}
				entryDiv.firstChild.style.display = 'block';
			}
		});

		h1ListDiv.appendChild(innerEntryBulletList);
		for (const innerEntry of entry.list) {
			const innerEntryDiv = createElement('li', 'innerEntryDiv');
			innerEntryDiv.innerHTML = parseText(innerEntry);
			innerEntryDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) innerEntryDiv.style.display = 'none'; });
			innerEntryBulletList.appendChild(innerEntryDiv);
		}
	}
}

function buildSectionNested(sectionContentDiv, sectionContent) {
	for (const entry of sectionContent) {
		const entryDiv = createElement('div', 'entryDiv');
		const entryTitleDiv = createElement('div', 'entryTitleDiv');
		const h1ListDiv = createElement('div', 'innerListDivH1');
		const innerEntryDivListH1 = createElement('div', 'innerEntryDivList');

		sectionContentDiv.appendChild(entryDiv);

		entryTitleDiv.innerHTML = parseText(entry?.h1);
		entryDiv.appendChild(entryTitleDiv);
		entryDiv.appendChild(h1ListDiv);

		entryDiv.firstChild.addEventListener('click', () => {
			if (entryDiv.classList.contains('collapsed')) {
				entryDiv.classList.remove('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'flex';
				}
			} else {
				entryDiv.classList.add('collapsed');
				for (const child of entryDiv.children) {
					child.style.display = 'none';
				}
				entryDiv.firstChild.style.display = 'block';
			}
		});

		if (!entry.list[0]?.h2) {
			h1ListDiv.appendChild(innerEntryDivListH1);
			for (const innerEntry of entry.list) {
				const innerEntryDiv = createElement('div', 'innerEntryDiv');
				innerEntryDiv.innerHTML = parseText(innerEntry);
				innerEntryDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) innerEntryDiv.style.display = 'none'; });
				innerEntryDiv.innerHTML += "&ensp;|&ensp;";
				innerEntryDivListH1.appendChild(innerEntryDiv);
			}
			innerEntryDivListH1.lastChild.innerHTML = innerEntryDivListH1.lastChild.innerHTML.replace(/\s\|\s/g, "");
			continue;
		}

		for (let i = 0; i < entry.list.length; i++) {
			const entrySubtitleDiv = createElement('div', 'entrySubtitleDiv');
			const h2ListDiv = createElement('div', 'innerListDivH2');
			const innerEntryDivListH2 = createElement('div', 'innerEntryDivList');

			entrySubtitleDiv.innerHTML = parseText(entry.list[i].h2);
			h1ListDiv.appendChild(h2ListDiv);
			h2ListDiv.appendChild(entrySubtitleDiv);
			h2ListDiv.appendChild(innerEntryDivListH2);

			h2ListDiv.firstChild.addEventListener('click', () => {
				if (h2ListDiv.classList.contains('collapsed')) {
					h2ListDiv.classList.remove('collapsed');
					for (const child of h2ListDiv.children) {
						child.style.display = 'flex';
					}
				} else {
					h2ListDiv.classList.add('collapsed');
					for (const child of h2ListDiv.children) {
						child.style.display = 'none';
					}
					h2ListDiv.firstChild.style.display = 'block';
				}
			});

			for (const innerEntry of entry.list[i].list) {
				const innerEntryDiv = createElement('div', 'innerEntryDiv');
				innerEntryDiv.innerHTML = parseText(innerEntry);
				innerEntryDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) innerEntryDiv.style.display = 'none'; });
				innerEntryDiv.innerHTML += "&ensp;|&ensp;";
				innerEntryDivListH2.appendChild(innerEntryDiv);
			}
			innerEntryDivListH2.lastChild.innerHTML = innerEntryDivListH2.lastChild.innerHTML.replace(/\s\|\s/g, "");
		}
	}
	return sectionContentDiv;
}

function buildEntryDiv(entryDiv, entryContent) {
	const entryTitleDiv = createElement('div', 'entryTitleDiv');
	const entrySubtitleDiv = createElement('div', 'entrySubtitleDiv');
	const entryDescriptionDiv = createElement('div', 'entryDescriptionDiv');
	const entryGradeDiv = createElement('div', 'entryGradeDiv');
	const entryExtraDiv = createElement('div', 'entryExtraDiv');
	const entryMediaDiv = createElement('div', 'entryMediaDiv');

	entryTitleDiv.innerHTML = parseText(entryContent?.title);
	entrySubtitleDiv.innerHTML = parseText(entryContent?.subtitle);
	entryDescriptionDiv.innerHTML = parseText(entryContent?.description);
	entryGradeDiv.innerHTML = parseText(entryContent?.grade);
	entryExtraDiv.innerHTML = parseText(entryContent?.extra);
	entryMediaDiv.innerHTML = parseMedia(entryContent?.media);

	if (entryContent?.title)	entryDiv.appendChild(entryTitleDiv);
	if (entryContent?.subtitle)	entryDiv.appendChild(entrySubtitleDiv);
	if (entryContent?.description)	entryDiv.appendChild(entryDescriptionDiv);
	if (entryContent?.grade)	entryDiv.appendChild(entryGradeDiv);
	if (entryContent?.extra)	entryDiv.appendChild(entryExtraDiv);
	if (entryContent?.media)	entryDiv.appendChild(entryMediaDiv);
	entryDiv.appendChild(createElement('div', 'marginDiv'));

	entryDescriptionDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryDescriptionDiv.style.display = 'none'; });
	entryGradeDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryGradeDiv.style.display = 'none'; });
	entryExtraDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryExtraDiv.style.display = 'none'; });
	entryMediaDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryMediaDiv.style.display = 'none'; });

	return entryDiv;
}

function createElement(tagName, className, id) {
	let createdElement = document.createElement(tagName);

	if (className) {
		createdElement.setAttribute('class', className);
	}
	if (id) {
		createdElement.setAttribute('id', id);
	}
	return createdElement;
}

function parseText(content) {
	if (content == undefined || !content || content.length === 0) {
		return "";
	}
	let result = content;

	result = result.replace(/\n/g, "<br>");

	result = result.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
	result = result.replace(/__(.*?)__/g, "<i>$1</i>");

	result = result.replace(/::(.*?)::/g, "<span class=\"underline\">$1</span>");

	const matches_links = result.match(/!!<[^>]+><[^>]+>/g);
	if (matches_links) {
		for (const match of matches_links) {
			const [text, url] = match.match(/(?<=<)(.+?)(?=>)/g);
			result = result.replace(match, `<a href="${url}" target="_blank">${text}</a>`);
		}
	}
	return result;
}

function parseMedia(content) {
	if (content == undefined || !content || content.length === 0) {
		return "";
	}
	const mediaGalleryDiv = createElement('div', 'mediaGalleryDiv');
	for (const media of content) {
		const containerDiv = createElement('div', 'mediaContainerDiv');
		mediaGalleryDiv.appendChild(containerDiv);
		containerDiv.innerHTML = `<img src="${media}" alt="Media" class="mediaImage">`;
	}
	return mediaGalleryDiv.outerHTML;
}

function parseIcon(content) {
	if (content == undefined || !content || content.length === 0) {
		return "";
	}
	const html = `<div class="entryIconContainerDiv"><img src="${content}" alt="Icon"></div>`;
	return html;
}

