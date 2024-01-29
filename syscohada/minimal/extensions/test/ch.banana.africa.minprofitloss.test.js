// Copyright [2024] [Banana.ch SA - Lugano Switzerland]
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//


// @id = ch.banana.africa.minprofitloss.test
// @api = 1.0
// @pubdate = 2024-01-29
// @publisher = Banana.ch SA
// @description = <TEST ch.banana.africa.minprofitloss.test.js>
// @task = app.command
// @doctype = *.*
// @docproperties = 
// @outputformat = none
// @inputdataform = none
// @includejs = ../ch.banana.africa.minprofitloss.js
// @timeout = -1



// Register test case to be executed
Test.registerTestCase(new MinimalProfitLossReport());

// Here we define the class, the name of the class is not important
function MinimalProfitLossReport() {

}

// This method will be called at the beginning of the test case
MinimalProfitLossReport.prototype.initTestCase = function() {

}

// This method will be called at the end of the test case
MinimalProfitLossReport.prototype.cleanupTestCase = function() {

}

// This method will be called before every test method is executed
MinimalProfitLossReport.prototype.init = function() {

}

// This method will be called after every test method is executed
MinimalProfitLossReport.prototype.cleanup = function() {

}

MinimalProfitLossReport.prototype.testBananaExtension = function() {

	/**
	 * Test 1: column Gr
	 */
	var banDoc = Banana.application.openDocument("file:script/../test/testcases/min_syscohada_test_2024.ac2");
    var previousDoc = Banana.application.openDocument("file:script/../test/testcases/min_syscohada_test_2023.ac2");
	Test.assert(banDoc);
    Test.assert(previousDoc);

	var userParam = {};
  	userParam.selectionStartDate = "2024-01-01";
  	userParam.selectionEndDate = "2024-12-31";
  	userParam.title = "COMPTE DE RESULTAT 2024";
	userParam.logo = false;
	userParam.logoname = 'Logo';
	userParam.printheader = false;
	userParam.printtitle = true;
	userParam.title = '';
	userParam.column = 'Gr1';
	userParam.printcolumn = false;

	var reportStructure = createReportStructure();

	const bReport = new BReport(banDoc, userParam, reportStructure);
	bReport.validateGroupsProfitAndLoss(userParam.column);
	bReport.loadBalances();
	bReport.calculateTotals(["currentAmount", "previousAmount"]);
	bReport.formatValues(["currentAmount", "previousAmount"]);
	bReport.excludeEntries();

	var report = printprofitlossstatement(banDoc, previousDoc, userParam, bReport, "");
	Test.logger.addReport("Test 'Compte de résultat'", report);


}