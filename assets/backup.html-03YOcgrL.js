import{_ as e,a as t}from"./sqlite3-LhAuI0jS.js";import{_ as o,o as a,c as r,f as d}from"./app-HDRrVlgJ.js";const i={},n=d('<h1 id="backup-restore" tabindex="-1"><a class="header-anchor" href="#backup-restore" aria-hidden="true">#</a> Backup&amp;Restore</h1><h2 id="method-1-built-in" tabindex="-1"><a class="header-anchor" href="#method-1-built-in" aria-hidden="true">#</a> <strong>Method 1-Built-in</strong></h2><p>Use <code>AList</code> to manage <code>Backup/Restore</code> options</p><blockquote><ol><li><p>Backup: Backup Alist data (<mark><strong>does not include index</strong></mark>)</p></li><li><p>Recovery: Backup files before recovery</p></li><li><p>Override: Select override when recovery, and will override the user information</p></li><li><p>Encryption Password:Fill in the <code>ENCRYPTION PASSWORD</code> Export, the information will be encrypted when exporting.You also need to enter the <code>ENCRYPTION PASSWORD</code> first before importing.^<sup>3.40.0_New</sup></p></li></ol></blockquote><p><img src="'+e+'" alt=""></p><h2 id="method-2-sqlite3" tabindex="-1"><a class="header-anchor" href="#method-2-sqlite3" aria-hidden="true">#</a> <strong>Method 2-Sqlite3</strong></h2><p>Back up the data/<code>data.db</code> database in the<code> AList</code> directory, and wait for the new environment to replace it directly (<mark><strong>contains index data</strong></mark>)</p><ul><li>If there are two files, if there are <code>data.db-shm</code> and <code>data.db-wal</code>, they must be backup together.</li><li>It is recommended to stop running Alist and then backup, so that the two files of <code>data.db-shm</code> and<code>data.db-wal</code> will be merged with the <code>data.db</code></li></ul><p><img src="'+t+'" alt=""></p><h2 id="method-3-other-database" tabindex="-1"><a class="header-anchor" href="#method-3-other-database" aria-hidden="true">#</a> <strong>Method 3-Other database</strong></h2><p>Other, if you use <code>mysql, postgres</code> and other non <code>sqlite database</code>, please solve it by yourself (<mark><strong>include indexing data</strong></mark>)</p>',11),s=[n];function c(l,h){return a(),r("div",null,s)}const m=o(i,[["render",c],["__file","backup.html.vue"]]);export{m as default};