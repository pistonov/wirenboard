// Скрипт декодирует ошибки Baxi в человекопонятную форму
// Будет содано новое виртуальное устройство "WBE2-I-OPENTHERM коды ошибок" с описанием возникающих ошибок

var Boiler_error_topic = 'wbe2-i-opentherm-1735_11/Error Code'; // Топик с ошибками котла Baxi

var map_cells = {
    code: { 
        type: "value",
        value: 0,
        readonly: true
    },
    description: { 
        type: "text",
        value: "",
        readonly: true
    }
};

defineVirtualDevice("Boiler_error_codes", {
    title: "WBE2-I-OPENTHERM коды ошибок",
    cells: map_cells
});

defineRule("boiler_error_decrypt", {
    whenChanged: [Boiler_error_topic],
    then: function (newValue, devName, cellName) {
        if (newValue == "1") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Отсутствие зажигания.";
        }

        if (newValue == "2") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Сработал предохранительный термостат перегрева. Нажимать не менее 2 сек кнопку R";
        }
		
        if (newValue == "3") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Сработал предохранительный термостат (датчик тяги).";
        }
		
		if (newValue == "4") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Блокировка из-за отсутствия пламени после 6 попоследовательных попыток запуска. Нажимать не менее 2 сек кнопку R";
        }
		
		if (newValue == "5") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Неисправен датчик температуры контура отопления.";
        }
		
		if (newValue == "6") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Неисправен датчик температуры системы ГВС.";
        }

		if (newValue == "7") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Неисправен датчик температуры отходящих газов.";
        }

		if (newValue == "8") {
            dev["Boiler_error_codes"]["description"] = "Неисправностях компонентов электроники, отвечающей за сигнал пламени. Неисправность платы управления или отсутствие заземления.";
        }

		if (newValue == "9") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Проблема в цепи защиты газового клапана.";
        }

		if (newValue == "10") {
            dev["Boiler_error_codes"]["description"] = "Нет сигнала от реле минимального давления в системе отопления. Провекрить давление в контуре отопления.";
        }

        if (newValue == "11") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Сработал предохранительный термостат перегрева низкотемпературного контура.";
        }

        if (newValue == "12") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Отсутствие сигнала от дифференциального прессостата. Засорение трубок дифференциального гидравлического прессостата или микропереключатель неисправен.";
        }

        if (newValue == "13") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Повреждение контактов дифференциального контроллера объёма воды.";
        }

		if ((newValue == "25") || (newValue == "26")) {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Отсутствие циркуляции воды (блокировка насоса).";
        }

		if (newValue == "31") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Нет связи с контроллером.";
        }

		if (newValue == "32") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Наличие накипи в теплообменнике.";
        }
		
		if (newValue == "35") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Ошибка пламени (паразитное пламя). Нажимать не менее 2 сек кнопку R";
        }

        if (newValue == "96") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Понижение напряжения в сети электропитания. Автоматический ПЕРЕЗАПУСК.";
        }
		
		if (newValue == "97") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Неправильная частота электропитания.";
        }
		
		if (newValue == "98") {
            dev["Boiler_error_codes"]["code"] = newValue;
            dev["Boiler_error_codes"]["description"] = "Ошибка в цепи аварийной защиты газового клапана.";
        }
    }
});
