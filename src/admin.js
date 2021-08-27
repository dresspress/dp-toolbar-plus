import "./admin.scss";

import api from "@wordpress/api";

import {
	Button,
	Icon,
	Panel,
	PanelBody,
	PanelRow,
	Placeholder,
	SelectControl,
	Spinner,
	TextControl,
	ToggleControl,
    RangeControl,
    __experimentalNumberControl as NumberControl,
    __experimentalUnitControl as UnitControl,
    // __experimentalScrollable as Scrollable 
} from "@wordpress/components";

import { Fragment, render, Component } from "@wordpress/element";

import { __ } from "@wordpress/i18n";

import {camelCase, each, mapKeys} from 'lodash';

class App extends Component {
	constructor() {
		super(...arguments);

        this.setStyle = this.setStyle.bind(this);

		this.state = {
            adminSettings: {},
			exampleSelect: "",
			exampleText: "",
			exampleText2: "",
			exampleText3: "",
			exampleToggle: false,
			isAPILoaded: false,
		};
	}

	componentDidMount() {
		api.loadPromise.then(() => {
			this.settings = new api.models.Settings();

			const { isAPILoaded } = this.state;

			if (isAPILoaded === false) {
				this.settings.fetch().then((response) => {
                    console.log(response);

                    const adminSettings = mapKeys(response["dp_admin_settings"], (v, k) => camelCase(k));
                    console.log('adminSettings', adminSettings);

					this.setState({
                        adminSettings: adminSettings,
						exampleSelect:
							response["wholesomecode_wholesome_plugin_example_select"],
						exampleText:
							response["wholesomecode_wholesome_plugin_example_text"],
						exampleText2:
							response["wholesomecode_wholesome_plugin_example_text_2"],
						exampleText3:
							response["wholesomecode_wholesome_plugin_example_text_3"],
						exampleToggle: Boolean(
							response["wholesomecode_wholesome_plugin_example_toggle"]
						),
						isAPILoaded: true,
					});
                    console.log(this.state);
				});
			}
		});
	}

    setStyle(name, value) {
        // console.log(target.name);
        // console.log(target.value);
        document.querySelector('#adminmenumain').style.setProperty("--dp-menu-width", value);


        const adminSettings = this.state.adminSettings;
        adminSettings[name] = value;


		const settings = new api.models.Settings({adminSettings});
		settings.save();

        this.setState({ adminSettings });
    }

	render() {
		const {
            
			exampleSelect,
			exampleText,
			exampleText2,
			exampleText3,
			exampleToggle,
            adminSettings,
			isAPILoaded,
		} = this.state;

        const settings = adminSettings;
        console.log(settings);

		if (!isAPILoaded) {
			return (
				<Placeholder>
					<Spinner />
				</Placeholder>
			);
		}

        const units = [
            { value: 'px', label: 'px', default: 160 },
            { value: '%', label: '%', default: 20 },
            { value: 'em', label: 'em', default: 10 },
        ];

		return (
			<Fragment>
				<div className="wholesome-plugin__header">
					<div className="wholesome-plugin__container">
						<div className="wholesome-plugin__title">
							<h1>
								{__("Wholesome Plugin Settings", "wholesome-plugin")}{" "}
								<Icon icon="admin-plugins" />
							</h1>
						</div>
					</div>
				</div>

				<Button
							isPrimary
							onClick={() => {
								const {
									adminSettings
								} = this.state;

								const settings = new api.models.Settings({
									["dp_admin_settings"]: adminSettings
								});
								settings.save().then((res) => {
console.log('after save', res);
								});
							}}
						>
							{__("Save", "wholesome-plugin")}
						</Button>

				<div className="wholesome-plugin__main">
					<Panel>
						<PanelBody
							title={__("Panel Body One", "wholesome-plugin")}
							icon="admin-plugins"
						>
							<SelectControl
								help={__("An example dropdown field.", "wholesome-plugin")}
								label={__("Layout", "wholesome-plugin")}
								// onChange={(value) => this.setStyle('layout', value)}
								options={[
									{
										label: __("Please Select...", "wholesome-plugin"),
										value: "top",
									},
									{
										label: __("Option 1", "wholesome-plugin"),
										value: "main",
									},
									{
										label: __("Option 2", "wholesome-plugin"),
										value: "split",
									},
								]}
								value={exampleSelect}
							/>
                            <UnitControl
								help={__("This is an example text field.", "wholesome-plugin")}
								label={__("Admin menu width", "wholesome-plugin")}
								onChange={(value) => this.setStyle('menuWidth', value)}
								value={settings.menuWidth}
                                disabledUnits={false}
                                units={units}
                                // isPressEnterToChange={true}
                                // min={0}
							/>
                            <RangeControl
								help={__("This is an example text field.", "wholesome-plugin")}
								label={__("font size", "wholesome-plugin")}
								onChange={(value) => this.setStyle('menuWidth', this.state.adminSettings.menuWidth)}
								value={parseInt(settings.menuWidth)}
                                // disabledUnits={false}
                                // units={units}
                                // isPressEnterToChange={true}
                                // min={0}
                                allowReset={true}
                                resetFallbackValue={16}
                                withInputField={false}
							/>
						</PanelBody>
						<PanelBody
							title={__("Panel Body Two", "wholesome-plugin")}
							icon="admin-plugins"
						>
							
						</PanelBody>
						<PanelBody
							title={__("Panel Body Three", "wholesome-plugin")}
							icon="admin-plugins"
						>
							<PanelRow>
								<TextControl
									help={__(
										"Use PanelRow to place controls inline.",
										"wholesome-plugin"
									)}
									label={__("Example Text 2", "wholesome-plugin")}
									onChange={(exampleText2) => this.setState({ exampleText2 })}
									value={exampleText2}
								/>
								<TextControl
									help={__("This control is inline.", "wholesome-plugin")}
									label={__("Example Text 3", "wholesome-plugin")}
									onChange={(exampleText3) => this.setState({ exampleText3 })}
									value={exampleText3}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody
							title={__("Panel Body Four", "wholesome-plugin")}
							icon="admin-plugins"
						>
							<ToggleControl
								checked={exampleToggle}
								help={__("An example toggle.", "wholesome-plugin")}
								label={__("Example Toggle", "wholesome-plugin")}
								// onChange={(value) => this.setStyle('panel')}
							/>
						</PanelBody>
						
					</Panel>
				</div>
			</Fragment>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const htmlOutput = document.getElementById("wholesome-plugin-settings");

    let customizer = document.createElement( 'div' );
    customizer.id = 'dp-admin-customizer';
    document.body.append(customizer);
    customizer = document.getElementById("dp-admin-customizer");



	// if (customizer) {
		render(<App />, customizer);
	// 
});
