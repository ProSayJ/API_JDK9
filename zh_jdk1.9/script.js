/*
 * Copyright (c) 2013, 2017, Oracle and/or its affiliates. All rights reserved.
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

var moduleSearchIndex;
var packageSearchIndex;
var typeSearchIndex;
var memberSearchIndex;
var tagSearchIndex;
function loadScripts(doc, tag) {
   
}

function createElem(doc, tag, path) {
  
}

setTimeout(function () {
        var t0 = document.getElementById("t0");
        if (t0) {
            t0.innerHTML = "<span><a href='javascript:show(65535);'>所有方法</a></span>";
        }
    }
    ,
    2000
);


function show(type)
{
    count = 0;
    for (var key in methods) {
        var row = document.getElementById(key);
        if ((methods[key] &  type) != 0) {
            row.style.display = '';
            row.className = (count++ % 2) ? rowColor : altColor;
        }
        else
            row.style.display = 'none';
    }
    updateTabs(type);
}

function updateTabs(type)
{
    for (var value in tabs) {
        var sNode = document.getElementById(tabs[value][0]);
        var spanNode = sNode.firstChild;
        if (value == type) {
            sNode.className = activeTableTab;
    
        }
        else {
            sNode.className = tableTab;
           
        }
    }
}

function showPkgs(type)
{
    count = 0;
    for (var key in packages) {
        var row = document.getElementById(key);
        if ((packages[key] &  type) !== 0) {
            row.style.display = '';
            row.className = (count++ % 2) ? rowColor : altColor;
        }
        else
            row.style.display = 'none';
    }
    updatePkgsTabs(type);
}



function updateModuleFrame(pFrame, cFrame)
{
    top.packageFrame.location = pFrame;
    top.classFrame.location = cFrame;
}

function updatePkgsTabs(type)
{
    for (var value in tabs) {
        var sNode = document.getElementById(tabs[value][0]);
        var spanNode = sNode.firstChild;
        if (value == type) {
            sNode.className = activeTableTab;
            spanNode.innerHTML = tabs[value][1];
        }
        else {
            sNode.className = tableTab;
            spanNode.innerHTML = "<a href=\"javascript:showPkgs(" + value + ");\">" + tabs[value][1] + "</a>";
        }
    }
}
