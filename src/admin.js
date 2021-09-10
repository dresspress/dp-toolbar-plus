/* global dpToolbarSettings */

import './admin.scss';

import domReady from '@wordpress/dom-ready';

import api from '@wordpress/api';

import { __ } from '@wordpress/i18n';

import {
	Button,
	Panel,
	PanelBody,
	SelectControl,
	SnackbarList,
	CheckboxControl,
	FormTokenField,
	__experimentalHStack as HStack,
} from '@wordpress/components';

import { dispatch, useDispatch, useSelect } from '@wordpress/data';

import { Fragment, render, Component, useState } from '@wordpress/element';

import { store as noticesStore } from '@wordpress/notices';

import _ from 'lodash';

const Notices = () => {
	const notices = useSelect(
		(select) =>
			select(noticesStore)
				.getNotices()
				.filter((notice) => {
					return notice.type === 'snackbar';
				}),
		[]
	);

	const { removeNotice } = useDispatch(noticesStore);

	return (
		<SnackbarList
			className="dp-toolbar-settings-notices"
			notices={notices}
			onRemove={removeNotice}
		/>
	);
};

let roleOptions = [];
let capList = [];

const settings = dpToolbarSettings;
const roles = dpToolbarSettings.roles;

for (const [option, role] of Object.entries(roles)) {
	roleOptions.push({ label: role.name, value: option });
	capList = capList.concat(Object.keys(role.capabilities));
}

capList = _.uniq(capList);

const DisplayRule = ({
	label = '',
	onChange,
	active = false,
	action = '',
	logged_in = false,
	not_logged_in = true,
	roles = [],
	caps = [],
	scope = '',
}) => {
	return (
		<>
			<CheckboxControl
				label={__(
					'Enable display rule for front-end Toolbar',
					'dp-toolbar-plus'
				)}
				checked={active}
				onChange={(active) => {
					onChange({ active });
				}}
			/>

			{active && (
				<div className="dp-toolbar-display-rule">
					<HStack align="center" justify="flex-start">
						<SelectControl
							labelPosition="side"
							value={action}
							options={[
								{
									label: __(
										'Show Toolbar',
										'dp-toolbar-plus'
									),
									value: 'show',
								},
								{
									label: __(
										'Hide Toolbar',
										'dp-toolbar-plus'
									),
									value: 'hide',
								},
							]}
							onChange={(action) => {
								onChange({ action });
							}}
						/>

						<SelectControl
							labelPosition="side"
							value={scope}
							options={[
								{
									label: __(
										'for all users',
										'dp-toolbar-plus'
									),
									value: 'all',
								},
								{
									label: __(
										'for all users except administrators',
										'dp-toolbar-plus'
									),
									value: 'not_admins',
								},
								{
									label: __(
										'for logged in users',
										'dp-toolbar-plus'
									),
									value: 'logged_in',
								},
								{
									label: __(
										'for non-logged in users',
										'dp-toolbar-plus'
									),
									value: 'not_logged_in',
								},
								{
									label: __(
										'for custom user scope',
										'dp-toolbar-plus'
									),
									value: 'custom',
								},
							]}
							onChange={(scope) => {
								onChange({ scope });
							}}
						/>
					</HStack>

					{scope == 'custom' && (
						<div className="dp-toolbar-custom-scope">
							<CheckboxControl
								label={__(
									'All non-logged in users',
									'dp-toolbar-plus'
								)}
								checked={not_logged_in}
								onChange={(not_logged_in) => {
									onChange({ not_logged_in });
								}}
							/>

							<CheckboxControl
								label={__(
									'All logged in users ',
									'dp-toolbar-plus'
								)}
								checked={logged_in}
								onChange={(logged_in) => {
									onChange({ logged_in });
								}}
							/>

							{logged_in && (
								<div className="dp-toolbar-roles-control">
									<label>
										{__(
											'with one of selected roles:',
											'dp-toolbar-plus'
										)}
									</label>

									<div className="dp-toolbar-roles-option-list">
										{roleOptions.map((role, index) => {
											return (
												<CheckboxControl
													key={index}
													label={role.label}
													checked={roles.includes(
														role.value
													)}
													value={role.value}
													onChange={(state) => {
														roles = state
															? _.union(roles, [
																	role.value,
															  ])
															: _.without(
																	roles,
																	role.value
															  );
														onChange({ roles });
													}}
												/>
											);
										})}
									</div>
								</div>
							)}

							{logged_in && (
								<div className={'dp-toolbar-caps-control'}>
									<FormTokenField
										label={__(
											'AND have one of selected capabilities:',
											'textdomai'
										)}
										value={caps}
										placeholder={__('e.g. manage_options')}
										suggestions={capList}
										tokenizeOnSpace={true}
										onChange={(caps) => {
											onChange({ caps });
										}}
										__experimentalExpandOnFocus={true}
										__experimentalValidateInput={(
											value
										) => {
											return capList.includes(value);
										}}
									/>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</>
	);
};

class Page extends Component {
	constructor() {
		super(...arguments);

		const defaultRule = {
			active: false,
			action: '',
			user: true,
			guest: true,
			roles: [],
			caps: [],
		};

		this.state = {
			front_display_rule: settings.front_display_rule,
			// admin_display_rule: settings.admin_display_rule,
			disable_user_pref: settings.disable_user_pref,
			auto_hide_show: settings.auto_hide_show,
			remove_wp_logo: settings.remove_wp_logo,
			isSaving: false,
		};
	}

	componentDidMount() {}

	render() {
		const {
			front_display_rule,
			admin_display_rule,
			disable_user_pref,
			auto_hide_show,
			remove_wp_logo,
			isSaving,
		} = this.state;

		return (
			<Fragment>
				<div className="dp-admin-page-header">
					<div className="dp-admin-page-header-container">
						<h1 className="dp-admin-page-title">
							{__('Toolbar Settings', 'dp-toolbar-plus')}
						</h1>
					</div>
				</div>

				<div className="dp-admin-page-body">
					<div className="dp-admin-page-content">
						<Panel>
							<PanelBody
								opened={true}
								title={__('General', 'dp-toolbar-plus')}
							>
								<CheckboxControl
									label={__(
										'Remove WP logo from toolbar',
										'dp-toolbar-plus'
									)}
									checked={remove_wp_logo}
									onChange={(remove_wp_logo) => {
										this.setState({ remove_wp_logo });
									}}
								/>
							</PanelBody>
							<PanelBody
								opened={true}
								title={__(
									'Front-end Toolbar',
									'dp-toolbar-plus'
								)}
							>
								<DisplayRule
									label={__(
										'Front-end Toolbar display rule',
										'dp-toolbar-plus'
									)}
									{...front_display_rule}
									onChange={(rule) => {
										this.setState({
											front_display_rule: {
												...front_display_rule,
												...rule,
											},
										});
									}}
								/>

								<CheckboxControl
									label={__(
										'Force disable Toolbar preference from Edit Profile page',
										'dp-toolbar-plus'
									)}
									checked={disable_user_pref}
									onChange={(disable_user_pref) => {
										this.setState({ disable_user_pref });
									}}
								/>
								<CheckboxControl
									label={__(
										'Automatically hide and show the toolbar',
										'dp-toolbar-plus'
									)}
									checked={auto_hide_show}
									onChange={(auto_hide_show) => {
										this.setState({ auto_hide_show });
									}}
								/>
							</PanelBody>
						</Panel>

						<p className="dp-admin-page-save-settings">
							<Button
								isPrimary
								isBusy={isSaving}
								onClick={() => {
									this.setState({ isSaving: true });

									let settings = new api.models.Settings({
										dp_toolbar_settings: {
											front_display_rule,
											disable_user_pref,
											auto_hide_show,
											remove_wp_logo,
										},
									});

									settings
										.save()
										.then(() => {
											this.setState({ isSaving: false });

											dispatch(
												'core/notices'
											).createNotice(
												'success',
												__(
													'Settings saved.',
													'dp-toolbar-plus'
												),
												{
													type: 'snackbar',
													isDismissible: true,
													id: 'save-settings-notice',
													actions: [
														{
															url: '/',
															label: __(
																'View site'
															),
														},
													],
												}
											);
										})
										.catch((error) => {
											// TODO: Catch error and display for better user experience.
											console.error('Error:', error);
										});
								}}
							>
								{isSaving
									? __('Saving', 'dp-toolbar-plus')
									: __('Save Settings', 'dp-toolbar-plus')}
							</Button>
						</p>
					</div>
					<Notices />
				</div>
			</Fragment>
		);
	}
}

domReady(() => {
	const pageWrap = document.getElementById('dp-toolbar-settings-page-wrap');

	if (pageWrap) {
		render(<Page />, pageWrap);
	}
});
