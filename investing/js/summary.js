window.summary = {

    tableMap: {},

    data: {},

    initSummary: function(tableName, data){
        var self = this;
        var new_summary = {
            currentAvg: 0,
            lastPid: 0,
            lastPcp: 0,
            tableLenght: data.length,
        };
        self.data[tableName] = new_summary;
        self.tableMapper(tableName, data);
        return new_summary;
    },

    tableMapper: function(tableName, data){
        var self = this;
        const mapped = data.map(obj => ({ [obj.pid]: tableName }) );
        var new_obj = Object.assign({}, ...mapped )
        self.tableMap = {
            ...self.tableMap,
            ...new_obj
        }
    },

    findTableByPid: function(pid){
        return this.tableMap[pid];

    },

    convertPcpValue: function(value){
        return parseFloat(value.replace("%",""))
    },

    getCurrentAvgOf(table_name){
        var self = this;
        var obj = self.getSummary(table_name);
        return obj.currentAvg;
    },

    getCurrentAvgFormatedOf: function(table_name){
        var self = this;
        var obj = self.getSummary(table_name);
        return obj.currentAvg.toFixed(2)+"%";
    },

    getSummary: function(tableName){
        var self = this;
        if (self.data[tableName] == undefined){
            obj = this.initSummary(tableName);
        }else{
            obj = self.data[tableName];
        }
        return obj;
    },

    setSummary: function(tableName, obj){
        var self = this;
        self.data[tableName] = obj;
    },

    calculateNewSummary: function(obj, value){
        const new_avg = ((obj.currentAvg * obj.tableLenght) + value) / (obj.tableLenght+1);
        return new_avg;
    },

    convertPcpToFloat: function(pcp_value){
        return parseFloat(pcp_value.replace("%",""));  
    },

    updateSummary: function(tableName, pid_obj){
        var self = this;
        let obj = self.getSummary(tableName)
        let pcpFloat = self.convertPcpToFloat(pid_obj.pcp)
        let skipUpdate = (obj.lastPid == parseInt(pid_obj.pid) && obj.lastPcp == pcpFloat);

        if(skipUpdate) return

        let new_avg = self.calculateNewSummary(obj, pcpFloat)

        obj.currentAvg = new_avg;
        obj.lastPcp = pcpFloat
        obj.lastPid = parseInt(pid_obj.pid)

        self.setSummary(tableName, obj);
    }
}