import { DATA } from "./data.js";


let isDBClickEnabled = false;

const SECTION_ORDER = [
	"Presentation",
	"Education",
	"Work Experience",
	"Portfolio",
	"Hard Skills",
	"Soft Skills",
	"Awards",
	"Projects and Competitions",
	"Languages",
	"Full Studies and Courses",
	"Competitive Sports",
]

main();

function main() {
	const mPageListDiv = document.getElementById('pageListDiv');

	const mPageDiv = document.getElementById('page');
	const mContentDiv = document.getElementById('pageContent');
	const mHeader = buildHeader(DATA.header);
	const mFooter = buildFooter(DATA.footer);

	mPageDiv.appendChild(mHeader);
	mPageDiv.appendChild(mContentDiv);

	const secretButton = createElement('button', '', 'secretButton');
	secretButton.addEventListener('dblclick', () => {
		alert(`Secret Button!\n` + `Editing is now ${isDBClickEnabled ? "Disabled" : "Enabled"}!`);
		isDBClickEnabled = !isDBClickEnabled;
	});
	mPageDiv.appendChild(secretButton);

	for (let i = 0; i < DATA.sections.length; i++) {
		const sectionData = DATA.sections[i];
		const mSectionDiv = createElement('div', 'sectionDiv', `section${i + 1}`);

		mContentDiv.appendChild(mSectionDiv);
		buildSection(mSectionDiv, sectionData);
		sortSections(mContentDiv);
	}
	mContentDiv.appendChild(mFooter);
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
		{ icon: "&#x1F30D", info: "Location:", content: headerData.location },
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
	const lawDiv = createElement('div', 'footerElem', 'lawDiv');
	const dateDiv = createElement('div', 'footerElem', 'dateDiv');

	signatureDiv.innerHTML = `<img src="${footerData.signature}" alt="Signature">`;

	lawDiv.innerHTML = parseText(footerData.law);
	dateDiv.innerHTML = parseText(footerData.date);

	signatureContainerDiv.appendChild(signatureDiv);
	mFooter.appendChild(createElement('div', 'sectionTitleDeco'));
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
		if (sectionTitleDiv.nextSibling.style.display === "flex") {
			sectionTitleDiv.nextSibling.style.display = "none";
		} else {
			sectionTitleDiv.nextSibling.style.display = "flex";
		}
	});

	switch (sectionData.type) {
		case "text-only":
			buildSectionText(sectionContentDiv, sectionData.content);
			break;
		case "generic-table":
			buildSectionTable(sectionContentDiv, sectionData.content);
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

function buildSectionNested(sectionContentDiv, sectionContent) {
	for (const entry of sectionContent) {
		const entryDiv = createElement('div', 'entryDiv');
		const entryTitleDiv = createElement('div', 'entryTitleDiv');
		const h1ListDiv = createElement('div', 'innerListDivH1');

		sectionContentDiv.appendChild(entryDiv);

		entryTitleDiv.innerHTML = parseText(entry?.h1);
		entryDiv.appendChild(entryTitleDiv);
		entryDiv.appendChild(h1ListDiv);

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

		if (!entry.list[0]?.h2) {
			for (const innerEntry of entry.list) {
				const innerEntryDiv = createElement('div', 'innerEntryDiv');
				innerEntryDiv.innerHTML = parseText(innerEntry);
				innerEntryDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) innerEntryDiv.style.display = 'none'; });
				h1ListDiv.appendChild(innerEntryDiv);
			}
			continue;
		}

		for (let i = 0; i < entry.list.length; i++) {
			const entrySubtitleDiv = createElement('div', 'entrySubtitleDiv');
			const h2ListDiv = createElement('div', 'innerListDivH2');

			entrySubtitleDiv.innerHTML = parseText(entry.list[i].h2);
			h1ListDiv.appendChild(h2ListDiv);
			h2ListDiv.appendChild(entrySubtitleDiv);

			h2ListDiv.firstChild.addEventListener('click', () => {
				if (h2ListDiv.classList.contains('collapsed')) {
					h2ListDiv.classList.remove('collapsed');
					for (const child of h2ListDiv.children) {
						child.style.display = 'block';
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
				h2ListDiv.appendChild(innerEntryDiv);
			}
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
	/* if (entryContent?.media) */	entryDiv.appendChild(entryMediaDiv);

	entryDescriptionDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryDescriptionDiv.style.display = 'none'; });
	entryGradeDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryGradeDiv.style.display = 'none'; });
	entryExtraDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryExtraDiv.style.display = 'none'; });
	entryMediaDiv.addEventListener('dblclick', () => { if (isDBClickEnabled) entryMediaDiv.style.display = 'none'; });

	return entryDiv;
}

/* function checkOverflow(pageDiv) {
	let overflowed = pageDiv.style.overflow;

	if ( !overflowed || overflowed === "visible" )
		pageDiv.style.overflow = "hidden";

	let isOverflowing = (pageDiv.clientWidth < pageDiv.scrollWidth) || (pageDiv.clientHeight < pageDiv.scrollHeight);

	pageDiv.style.overflow = overflowed;

	return isOverflowing;
} */

/* function handleOverflow(warpDiv) {
	const index = globalPageListDiv.children.length;
	const warpContentClone = warpDiv.cloneNode(true);

	let tempAncestor = warpDiv;
	let appendList = [];
	while (tempAncestor.classList.contains('sectionDiv') === false) {
		tempAncestor = tempAncestor.parentElement;
		let temp = tempAncestor.cloneNode();
		temp.innerHTML = "";
		appendList.push(temp);
	}
	if (appendList.length != 0)
		appendList[0].appendChild(warpContentClone);
	for (let i = 1; i < appendList.length; i++) {
		appendList[i].appendChild(appendList[i-1]);
		tempAncestor = appendList[i];
	}
	warpDiv.parentElement.removeChild(warpDiv);

	const newPageDiv = createElement('div', 'pageDiv', `page${index + 1}`);
	const newContentDiv = createElement('div', 'contentDiv', `contentDiv${index + 1}`);
	newContentDiv.appendChild(tempAncestor);
	newPageDiv.appendChild(newContentDiv);

	globalCurrPageDiv = newPageDiv;
	globalCurrContentDiv = newContentDiv;
	globalPageListDiv.appendChild(globalCurrPageDiv);

	return tempAncestor.firstChild;
} */

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

