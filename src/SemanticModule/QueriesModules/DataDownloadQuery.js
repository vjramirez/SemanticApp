// DataDownloadQuery.js
// --------------------------------------------------------------
// Consulta para descargar datos.
// --------------------------------------------------------------

import React from 'react';
import '../../index.css';
import {Button, Icon, Row, Col, Card, Input, Collapsible, CollapsibleItem} from 'react-materialize';
import CardTitle from 'react-materialize/lib/CardTitle';
import CardPanel from 'react-materialize/lib/CardPanel';
var _ = require('lodash');

export class DataDownloadQueryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formArrowUp: [false, false, false, false],
        };
    }

    handleOpenForm(index){
		let formArrowUp = this.state.formArrowUp;
		formArrowUp[index] = !this.state.formArrowUp[index];
		this.setState({
			errores: {
				fechasMal:false,
				faltaFecha: false,
			},
			fechaInicio: '',
			fechaFin: '',
			formArrowUp: formArrowUp,
		});
    }
    
    handleFechaInicio(event, value){
		const fechaFin = this.state.fechaFin;
		var errores = this.state.errores;
		var fechasMal = false;
		var faltaFecha = false;
		if (value !== ''){
			if (fechaFin === ''){
				faltaFecha = true;
			}
			else{
				var dateInicio = new Date(value);
				var dateFin = new Date(fechaFin);
				if (dateInicio.getTime() > dateFin.getTime()){
					fechasMal = true;
				}
			}
		}
		else{
			if (fechaFin !== ''){
				faltaFecha = true;
			}
		}
		errores['fechasMal'] = fechasMal;
		errores['faltaFecha'] = faltaFecha;
		this.setState({
			fechaInicio: value,
			errores: errores,
		});
	}

	handleFechaFin(event, value){
		const fechaInicio = this.state.fechaInicio;
		var errores = this.state.errores;
		var fechasMal = false;
		var faltaFecha = false;
		if (value !== ''){
			if (fechaInicio === ''){
				faltaFecha = true;
			}
			else{
				var dateInicio = new Date(fechaInicio);
				var dateFin = new Date(value);
				if (dateInicio.getTime() > dateFin.getTime()){
					fechasMal = true;
				}
			}
		}
		else{
			if (fechaInicio !== ''){
				faltaFecha = true;
			}
		}
		errores['fechasMal'] = fechasMal;
		errores['faltaFecha'] = faltaFecha;
		this.setState({
			fechaFin: value,
			errores: errores,
		});
	}

    render(){
        const formArrowUp = this.state.formArrowUp;
		const selectedSensors = this.props.selectedSensors;
        let buttonDisabled = false;
		let fechasClass = '';
		let erroresFechas = null;

        const formIcons = formArrowUp.map((value) => {
			if (value){
				return "keyboard_arrow_up";
			}
			else{
				return "keyboard_arrow_down";
			}
        });
        
        const sensoresUnits = selectedSensors.map((sensorId) => {
            const sensor = _.find(this.props.infoSensores, ['indicatorId', sensorId]);
            const sensorName = sensor['name'];
			const labelCheckbox = sensorName + " (" + sensorId + ") : ";
            return(
                (["2F1KT7","649NNJ","REMSDB","XYY72L"].includes(sensorId))?(
                <Row key={sensorId} s={12}>
                    <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                    <Col s={1}></Col>
                    <Col s={4}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='avg' label='Celsius (°C)' 
                            onChange={(e) => {}}
                        />
                    </Col>
                    <Col s={4}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='max' label='Fahrenheit (°F)' 
                            onChange={(e) => {}}
                        />
                    </Col>
                    <Col>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='min' label='Kelvin (°K)' 
                            onChange={(e) => {}}
                        />
                    </Col>
                    <Col s={1}></Col>
                    <Col s={4}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='min' label='Rankine (°Ra)' 
                            onChange={(e) => {}}
                        />
                    </Col>
                    <Col s={4}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='min' label='Réaumur (°Re)' 
                            onChange={(e) => {}}
                        />
                    </Col>
                </Row>):
                (["URS001","URS002","URS003","URS004","UFS001","UFS002","UFS003","UFS004"].includes(sensorId))?(
                    <Row key={sensorId} s={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col s={1}></Col>
                        <Col s={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Boolean' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col s={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='max' label='Numeric' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='min' label='String' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):
                (["T4C3B9"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Revs per minute (rpm)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='max' label='Hertz (Hz)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='min' label='Angular velocity (rad/s)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):
                (["79PWN7"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Watts (W)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='max' label='Horse power (HP)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):
                (["84RATS"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Pascals (Pa)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='max' label='Atmospheres (atm)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='max' label='Bar (bar)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Pounds per square inch (lbf/in&#178;)' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):null
            );
        });

        const sensoresComponents = selectedSensors.map((sensorId) => {
            const sensor = _.find(this.props.infoSensores, ['indicatorId', sensorId]);
            const sensorName = sensor['name'];
			const labelCheckbox = sensorName + " (" + sensorId + ") : ";
            return(
                (["2F1KT7"].includes(sensorId))?(
                <Row key={sensorId} s={12}>
                    <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                    <Col s={1}></Col>
                    <Col s={11}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='avg' label='Fan 1 Zone 01' 
                            onChange={(e) => {}}
                        />
                    </Col>
                    <Col s={1}></Col>
                    <Col s={11}>
                        <Input name='groupBy' type='checkbox' className='filled-in'
                            value='max' label='Heater Band 1 Zone 1' 
                            onChange={(e) => {}}
                        />
                    </Col>
                </Row>):
                (["T4C3B9"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Screw 1' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):
                (["79PWN7"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={3}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Motor 1' 
                                onChange={(e) => {}}
                            />
                        </Col>
                        <Col l={8}>
                            <Row l={12}>
                                <Col l={2}></Col>
                                <Col l={10}>
                                    <Card title="Features">
                                        <Row>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Width' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Height' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Weight' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Power' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Speed' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                            <Col>
                                            <Input name='groupBy1' type='checkbox' className=''
                                                value='avg' label='Torque' 
                                                onChange={(e) => {}}
                                            />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>):
                (["84RATS"].includes(sensorId))?(
                    <Row key={sensorId} l={12}>
                        <p className="black-text tabSpace"><span>{labelCheckbox}</span></p>
                        <Col l={1}></Col>
                        <Col l={4}>
                            <Input name='groupBy' type='checkbox' className='filled-in'
                                value='avg' label='Barrel 1' 
                                onChange={(e) => {}}
                            />
                        </Col>
                    </Row>):null
            );
        });

        return(
            <Card>
                <Row>
					<p className="black-text tabSpace">Download enriched sensor data using annotations in ontology.</p>
				</Row>

				<Collapsible expandable className="white">
                    <CollapsibleItem header='Basic data' onClick={() => {this.handleOpenForm(0)}} icon={formIcons[0]}>
                        <span className="center">
                            <Row>
                                <Col s={6}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='avg' label='Timestamp' checked
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={6}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='max' label='Value' checked
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={6}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='min' label='Sensor id' checked
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={6}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='min' label='Sensor type'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={6}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='min' label='Sensor description'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                            </Row>
                        </span>
                    </CollapsibleItem>
                    
                    <CollapsibleItem header='Enriched data' onClick={() => {this.handleOpenForm(1)}} icon={formIcons[1]}>
                        <Row s={12}>
                            <Col s={6}>
                                <Input name='groupBy' type='checkbox' className='filled-in'
                                    value='avg' label='Sensor max operational value' 
                                    onChange={(e) => {}}
                                />
                            </Col>
                            <Col s={6}>
                                <Input name='groupBy' type='checkbox' className='filled-in'
                                    value='max' label='Sensor min operational value' 
                                    onChange={(e) => {}}
                                />
                            </Col>
                            <Col s={6}>
                                <Input name='groupBy' type='checkbox' className='filled-in'
                                    value='min' label='Machine id' 
                                    onChange={(e) => {}}
                                />
                            </Col>
                            <Col s={6}>
                                <Input name='groupBy' type='checkbox' className='filled-in'
                                    value='min' label='Machine description' 
                                    onChange={(e) => {}}
                                />
                            </Col>
                            <Col s={12}>
                                <span className="bold overLine">Data value conversions: </span>
                                {sensoresUnits}
                            </Col>
                            <Col s={12}>
                                <span className="bold overLine">Extruder component data related to selected sensors: </span>
                                {sensoresComponents}
                            </Col>
                        </Row>
                    </CollapsibleItem>
                    
                    <CollapsibleItem header='Aggregate functions' onClick={() => {this.handleOpenForm(2)}} icon={formIcons[2]}>
                        <span className="center">
                            <Row>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='avg' label='Average'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='max' label='Maximum'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='med' label='Median'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='sum' label='Sum'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='min' label='Minimum'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='mod' label='Mode'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                                <Col s={4}>
                                    <Input name='groupBy' type='checkbox' className='filled-in'
                                        value='count' label='Count'
                                        onChange={(e) => {}}
                                    />
                                </Col>
                            </Row>
                        </span>
                    </CollapsibleItem>

                    <CollapsibleItem header='Filter results by date' onClick={() => {this.handleOpenForm(3)}} icon={formIcons[3]}>
                        <span className="center">
                            <Row>
                                <Col s={12} l={6}>
                                    <Input type='date' label="From..." options={{format: 'yyyy-mm-dd'}}
                                        onChange={(e, value) => {this.handleFechaInicio(e, value);}}
                                        className={fechasClass}/>
                                </Col>
                                <Col s={12} l={6}>
                                    <Input type='date' label="To..." options={{format: 'yyyy-mm-dd'}}
                                        onChange={(e, value) => {this.handleFechaFin(e, value);}}
                                        className={fechasClass}/>
                                </Col>
                                {erroresFechas}
                            </Row>
                        </span>
                    </CollapsibleItem>

                </Collapsible>

                <Row className='center-align form-collap'>
                    <Button className='blue darken-3 topMargin' type='submit'
                        name='action' onClick={() => {return false;}}
                        disabled={buttonDisabled}>
                        DOWNLOAD
                        </Button>
                </Row>
            </Card>
        );
    }
}