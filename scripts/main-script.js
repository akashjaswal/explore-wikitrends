// Author: Akash

//------------------------------------------------------------------------------

// Import Data from CSV files

d3.csv("data/monthly.csv", function(monthly){
d3.csv("data/biweekly.csv", function(biweekly){


// Initializing All Google Trend Scripts for Iframe Embedding
var terms_1_year = { 
                    All_P: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Bernie+Sanders,+Donald+Trump,+Hillary+Clinton,+John+Kasich,+Ted+Cruz&date=4/2015+13m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    DT:'<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Donald+Trump&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    HC: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Hillary+Clinton&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    BS: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Bernie+Sanders&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    TC: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Ted+Cruz&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    JK: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=John+Kasich&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    ST: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=String+Theory&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    MF: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Megan+Fox&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SRK: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=/m/01zh29&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SP: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Sundar+Pichai&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    DL: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Deep+Learning&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    AS: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Spark&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    AH: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Hadoop&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    ID: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Independence+Day+United+States&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SA: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=/m/0g59h53&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    JM: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Jack+Ma&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    RG: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=/m/03m6_z&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    All_GT: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Hadoop,+Apache+Spark,+Deep+Learning,+String+Theory,+Independence+day+united+States&date=7/2015+10m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    All_GP: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Jack+Ma,+Megan+Fox,+Ryan+Gosling,+Shah+Rukh+Khan,+Sundar+Pichai&date=4/2015+13m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>'
                  };

var terms_6_year = { 
                    All_P:'<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Bernie+Sanders,+Donald+Trump,+Hillary+Clinton,+John+Kasich,+Ted+Cruz&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    DT: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Donald+Trump&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    HC: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Hillary+Clinton&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    TC: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Ted+Cruz&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    JK: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=John+Kasich&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    BS: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Bernie+Sanders&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    ST: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=String+Theory&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    MF: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Sundar+Pichai&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SRK: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Shah+Rukh+Khan&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SP: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Sundar+Pichai&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    DL: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Deep+Learning&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    AS: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Spark&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    AH: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Hadoop&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    ID: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Independence+Day+United+States&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    SA: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=/m/0g59h53&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    JM: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Jack+Ma&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    RG: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=/m/03m6_z&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    All_GT: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Apache+Hadoop,+Apache+Spark,+Deep+Learning,+String+Theory,+Independence+Day+United+States&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>',
                    All_GP: '<script type="text/javascript" src="//www.google.com/trends/embed.js?hl=en-US&q=Jack+Ma,+Megan+Fox,+Ryan+Gosling,+Shah+Rukh+Khan,+Sundar+Pichai&date=4/2010+73m&cmpt=q&tz=Etc/GMT%2B7&tz=Etc/GMT%2B7&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330"></script>'
                  };


var Term_shorthand = {  DT:['Donald_Trump'],HC:['Hillary_Clinton'],BS:['Bernie_Sanders'],JK:['John_Kasich'],TC:['Ted_Cruz'],
                        MF:['Megan_Fox'] ,SRK:['Shah_Rukh_Khan'],SP:['Sundar_Pichai'],JM:['Jack_Ma'],RG:['Ryan_Gosling'],SA:['Sam_Anderson_(Tamil_actor)'],
                        ST:['String_theory'],DL:['Deep_Learning'],AS:['Apache_Spark'],AH:["Apache_Hadoop"],ID:['Independence_Day_(United_States)'],
                        All_P:['Donald_Trump','Hillary_Clinton','Bernie_Sanders','John_Kasich','Ted_Cruz'],
                        All_GP: ['Megan_Fox' ,'Shah_Rukh_Khan','Sundar_Pichai','Jack_Ma','Ryan_Gosling'],
                        All_GT: ['String_theory','Deep_Learning','Apache_Spark',"Apache_Hadoop",'Independence_Day_(United_States)'] 
                    }
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

// Function to filter data

function filterData(time, terms){
  if (time === "1p")
  {
      filteredData = _.filter(biweekly, function(d) {
      if ($.inArray(d.Page, Term_shorthand[terms]) != -1){
        return true;
      }
    });
}
else 
{
      filteredData = _.filter(monthly, function(d) {
      if ($.inArray(d.Page, Term_shorthand[terms]) != -1){
        return true;
      }
    });
}   
console.log(filteredData);
return filteredData;
}




//------------------------------------------------------------------------------

// Political Candidates Div

var pol_time = $("input[type='radio'][name='time-p']:checked").val();
var pol_term = $("input[type='radio'][name='politicians-bt']:checked").val();
// postscribe('#politicians-gt-chart', terms_1_year[pol_term]);
var filteredData = filterData("6p", "All_P");
redraw_politicians(pol_time, pol_term, filteredData);

$( 'input[type=radio][name=politicians-bt]' ).change(function()
{
  var pol_time = String($("input[type='radio'][name='time-p']:checked").val());
  var pol_term = String($("input[type='radio'][name='politicians-bt']:checked").val());
  var filteredData = filterData(pol_time, pol_term);
  redraw_politicians(pol_time, pol_term, filteredData);
});

$('input[type=radio][name=time-p]').change(function()
{
  var pol_time = String($("input[type='radio'][name='time-p']:checked").val());
  var pol_term = String($("input[type='radio'][name='politicians-bt']:checked").val());
  var filteredData = filterData(pol_time, pol_term);
  redraw_politicians(pol_time, pol_term, filteredData);
});


function redraw_politicians(pol_time, pol_term, filteredData){
  
  // Drawing Trends Data
  $('#politicians-gt-chart').empty();
  if (String(pol_time) == '1p'){
      postscribe('#politicians-gt-chart', terms_1_year[String(pol_term)]);
    }
    else{
      postscribe('#politicians-gt-chart', terms_6_year[String(pol_term)]);
  }

  // Drawing Wiki Data
  $('#politicians-wiki').empty();
  pages = [];
  dates = [];
  filteredData.forEach(function(d){
    pages.push(d.Page);
    dates.push(d.Date);
  });
  pages = _.uniq(pages);
  dates = _.uniq(dates);
  dataset = {}
  dataset.dates = dates;

for (var i = 0; i < pages.length; i++) {
   p = pages[i];
   pageviews_l = [];
   filteredData.forEach(function(d){
      if (d.Page === p)
      {
        pageviews_l.push(d.PageViews);
      }
  });
  dataset[p] = pageviews_l;
}
var tick_format, tick_count;
if (pol_time == '6p')
{
  tick_count = 6;
  tick_format = '%Y'
}
else{
  tick_count = 3;
  tick_format = "%b %Y"
}
  var chart = c3.generate({

    bindto: '#politicians-wiki',
    padding: {
        top: 20,
        right: 40,
        bottom: 10,
        left: 70,
    },
    size: {
        height: 300,
        width: 500
    },
    data: {
      json: dataset,
      x: 'dates', // it's possible to specify 'x' when category axis    
    },
    legend: {
        position: 'bottom',
    },
    axis: {
        x: {
            type: 'timeseries',
            color: '#DADFE1',
            tick: {
              count: tick_count,
                format: tick_format,
                color: '#DADFE1'
            },
        },
        y:{
          min: 0,
          padding: {top: 70, bottom: 8},
          label: 'PageViews',
        }
    },
    color: {
        pattern: ['#4183D7', '#C0392B', '#F7CA18', '#03A678', '#8E44AD']
        },
    point: {
        show: false
    }
});
    
}

//------------------------------------------------------------------------------

// General Candidates Div

var gc_time = $("input[type='radio'][name='time-gc']:checked").val();
var gc_term = $("input[type='radio'][name='gc-bt']:checked").val();
var filteredData = filterData(gc_time, gc_term);
redraw_celebs(gc_time, gc_term, filteredData);


$( 'input[type=radio][name=gc-bt]' ).change(function()
{
  
  var gc_time = String($("input[type='radio'][name='time-gc']:checked").val());
  var gc_term = String($("input[type='radio'][name='gc-bt']:checked").val());
  var filteredData = filterData(gc_time, gc_term);
  redraw_celebs(gc_time, gc_term, filteredData);
});

$('input[type=radio][name=time-gc]').change(function()
{
  var gc_time = String($("input[type='radio'][name='time-gc']:checked").val());
  var gc_term = String($("input[type='radio'][name='gc-bt']:checked").val());
  var filteredData = filterData(gc_time, gc_term);
  redraw_celebs(gc_time, gc_term, filteredData);
});


function redraw_celebs(gc_time, gc_term, filteredData){

  $('#gc-gt-chart').empty();
  $('#gc-wiki').empty();
  if (gc_time == '1p'){
    postscribe('#gc-gt-chart', terms_1_year[gc_term]);
  }
  else{
    postscribe('#gc-gt-chart', terms_6_year[gc_term]);
  }
  
  pages = [];
  dates = [];
  filteredData.forEach(function(d){
    pages.push(d.Page);
    dates.push(d.Date);
  });
  pages = _.uniq(pages);
  dates = _.uniq(dates);
  dataset = {}
  dataset.dates = dates;

for (var i = 0; i < pages.length; i++) {
   p = pages[i];
   pageviews_l = [];
   filteredData.forEach(function(d){
      if (d.Page === p)
      {
        pageviews_l.push(d.PageViews);
      }
  });
  dataset[p] = pageviews_l;
}
var tick_format, tick_count;
if (gc_time == '6p')
{
  tick_count = 6;
  tick_format = '%Y'
}
else{
  tick_count = 3;
  tick_format = "%b %Y"
}
  var chart = c3.generate({

    bindto: '#gc-wiki',
    padding: {
        top: 20,
        right: 40,
        bottom: 10,
        left: 70,
    },
    size: {
        height: 300,
        width: 500
    },
    data: {
      json: dataset,
      x: 'dates', // it's possible to specify 'x' when category axis    
    },
    legend: {
        position: 'bottom',
    },
    axis: {
        x: {
            type: 'timeseries',
            color: '#DADFE1',
            tick: {
              count: tick_count,
                format: tick_format,
                color: '#DADFE1'
            },
        },
        y:{
          min: 0,
          padding: {top: 70, bottom: 8},
          label: 'PageViews',
        }
    },
    color: {
        pattern: ['#4183D7', '#C0392B', '#F7CA18', '#03A678', '#8E44AD']
        },
    point: {
        show: false
    }
});
}

//------------------------------------------------------------------------------

// General Terms Div

var gt_time = $("input[type='radio'][name='time-gt']:checked").val();
var gt_term = $("input[type='radio'][name='gt-bt']:checked").val();
var filteredData = filterData(gt_time, gt_term);
redraw_generalTerms(gt_time, gt_term, filteredData);


$('input[type=radio][name=gt-bt]' ).change(function()
{
  var gt_time = String($("input[type='radio'][name='time-gt']:checked").val());
  var gt_term = String($("input[type='radio'][name='gt-bt']:checked").val());
  var filteredData = filterData(pol_time, pol_term);
  var filteredData = filterData(gt_time, gt_term);
  redraw_generalTerms(gt_time, gt_term, filteredData);
});

$('input[type=radio][name=time-gt]').change(function()
{
  var gt_time = String($("input[type='radio'][name='time-gt']:checked").val());
  var gt_term = String($("input[type='radio'][name='gt-bt']:checked").val());
  var filteredData = filterData(gt_time, gt_term);
  redraw_generalTerms(gt_time, gt_term, filteredData);
});


function redraw_generalTerms(gt_time, gt_term, filteredData){

  $('#gt-gt-chart').empty();
  $('#gt-wiki').empty();
  if (String(gt_time) == '1p'){
    postscribe('#gt-gt-chart', terms_1_year[String(gt_term)]);
  }
  else{
    postscribe('#gt-gt-chart', terms_6_year[String(gt_term)]);
  }

  pages = [];
  dates = [];
  filteredData.forEach(function(d){
    pages.push(d.Page);
    dates.push(d.Date);
  });
  pages = _.uniq(pages);
  dates = _.uniq(dates);
  dataset = {}
  dataset.dates = dates;

for (var i = 0; i < pages.length; i++) {
   p = pages[i];
   pageviews_l = [];
   filteredData.forEach(function(d){
      if (d.Page === p)
      {
        pageviews_l.push(d.PageViews);
      }
  });
  dataset[p] = pageviews_l;
}
var tick_format, tick_count;
if (gt_time == '6p')
{
  tick_count = 6;
  tick_format = '%Y'
}
else{
  tick_count = 3;
  tick_format = "%b %Y"
}
  var chart = c3.generate({

    bindto: '#gt-wiki',
    padding: {
        top: 20,
        right: 40,
        bottom: 10,
        left: 70,
    },
    size: {
        height: 300,
        width: 500
    },
    data: {
      json: dataset,
      x: 'dates', // it's possible to specify 'x' when category axis    
    },
    legend: {
        position: 'bottom',
    },
    axis: {
        x: {
            type: 'timeseries',
            color: '#DADFE1',
            tick: {
              count: tick_count,
                format: tick_format,
                color: '#DADFE1'
            },
        },
        y:{
          min: 0,
          padding: {top: 70, bottom: 8},
          label: 'PageViews',
        }
    },
    color: {
        pattern: ['#4183D7', '#C0392B', '#F7CA18', '#03A678', '#8E44AD']
        },
    point: {
        show: false
    }
});
}

});
});

