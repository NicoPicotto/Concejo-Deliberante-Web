import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
	return (
		<div className='timeline-container'>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='2019 - Presente'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Marcos G. Carasso</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Guillermo D. Cavigliasso <br />
						Edgardo J. Tamburelli
						<br />
						Silvina Angeletti
						<br />
						Debora S. Cots - Reemplazada por Marina M. Musso
						<br />
						Juan Pablo Macagno
						<br />
						Mauro N. Salusso - Reemplazado por Mauro Campagno
						<br />
						Claudia S. Villarruel
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Carlos R. Bossio
						<br />
						Gisele L. Gatica
						<br />
						Alejandro J. Massobrio
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='2015 - 2019'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Marcos G. Carasso</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Juan R. Sanchez
						<br />
						Guillermo D. Cavigliasso
						<br />
						M. Florencia Heiland
						<br />
						Claudia M. Pagella
						<br />
						Emilia A. Fava
						<br />
						Mauro N. Salusso
						<br />
						Mauro D. Campagno
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Carlos R. Bossio
						<br />
						Gisele L. Gatica
						<br />
						Alejandro J. Massobrio
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='2011 - 2015'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Carolina F. Eusebio
					</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Juan R. Sanchez
						<br />
						Stella M. Plaza
						<br />
						V. Pablo Karakachoff
						<br />
						Silvina Angeletti
						<br />
						Pablo L. Castro
						<br />
						M. Gabriela Diaz
						<br />
						Edduardo C. Ottani
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Alexis Malatini
						<br />
						M. Fernanda Colomba
						<br />
						Gesica S. Huppi
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='2007 - 2011'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Carolina F. Eusebio
					</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Ricardo D. Falzetti
						<br />
						V. Pablo Karakachoff
						<br />
						Susana Acosta
						<br />
						Stella M. Plaza
						<br />
						Eduardo C. Ottani
						<br />
						Jorge A. Mérida
						<br />
						M. Eugenia Rovetto
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Alexis Malatini
						<br />
						M. Fernanda Colomba
						<br />
						M. Teresa Caffaratti
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='2003 - 2007'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Rody Wilson Guerreiro
					</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Jorge Lazo
						<br />
						María Eugenia Rovetto
						<br />
						Marina Toledo de Rojo
						<br />
						Hugo Massobrio
						<br />
						Marcos Carasso
						<br />
						Oscar Borra - Reemplazado por Denis Marchiscio
						<br />
						Laura Bongiovanni
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						César Gomez
						<br />
						María Teresa Cafaratti
						<br />
						Eduardo Bongiovanni
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1999 - 2003'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Rody Wilson Guerreiro
					</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Hugo Massobrio
						<br />
						Marian Dadone
						<br />
						Sandra Carezzano
						<br />
						Marcos Carasso
						<br />
						Pablo Buffa
						<br />
						Amaro Sastre - Reemplazado por Ricardo Falzetti
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						César Gomez
						<br />
						Graciela Machucca
						<br />
						Mariel Fuentes
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1995 - 1999'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Roberto D. Grosso</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Juan Soave - Reemplazado por Pablo Buffa
						<br />
						Alberto Bottino
						<br />
						Edmundo J. Vogler - Reemplazado por Roberto de Michiel
						<br />
						Hugo O. Oderda - Reemplazado por Elvira Becerra
						<br />
						Carolina Bossio
						<br />
						Cecilia Berardo - Reemplazada por Ricardo Falzetti
						<br />
						Liliana Chiapella
						<br />
					</p>
					<p>
						*Ante el fallecimiento del Sr. Intendente Roberto D. Grosso, asume
						la intendencia la Sra. Carolina de Bossio y la Presidencia del
						Concejo es asumida por la Concejal Cecilia Berardo.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1991 - 1995'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Roberto D. Grosso</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Alberto Bottino
						<br />
						Juan H. Soave
						<br />
						Carolina E. de Bossio
						<br />
						Marisel Berrino - Reemplazada por Osmar Rovetto
						<br />
						Antonio F. Falco - Reemplazado por Rubén Zabala
						<br />
						Omar Bernabei
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1987 - 1991'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Susana del Bo</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Alberto Bottino
						<br />
						Juan Pedro Campagno
						<br />
						Antonio F. Falco
						<br />
						Jorge Merida
						<br />
						Gustavo R. Garino - Reemplazado por Osvaldo Antinori
						<br />
						Victor H. Baudino - Reemplazado por Miguel Actis
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1983 - 1987'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Victor Bossio</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Victor Baudino
						<br />
						Antonio Denguidard
						<br />
						Juan C. Macagno
						<br />
						Juan H. Soave
						<br />
						Susana del Bo de Luhning
						<br />
						Osvaldo Antinori
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Reynaldo Ribotta
						<br />
						Cecilia Berardo
						<br />
						Carlos Iturrieta
						<br />
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentStyle={{ background: '#fff', color: 'black' }}
					contentArrowStyle={{ borderRight: '7px solid  #fff' }}
					date='1973 - 1979'
					iconStyle={{ background: '#febe39', color: '#fff' }}
				>
					<h3 className='vertical-timeline-element-title'>Dr. Amaro Sastre</h3>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>Concejales</h4>
					<p>
						Federico E. Luhning
						<br />
						Esteban Molineris
						<br />
						Roberto D. Grosso
						<br />
						Eduardo J. Ponzio
						<br />
						Fermín Falco - Reemplazado por Marta S. de Karakachoff
						<br />
						Federico F. Concari
						<br />
					</p>
					<br />
					<h4 className='vertical-timeline-element-subtitle'>
						Tribunal de cuentas
					</h4>
					<p>
						Victor Baudino
						<br />
						Celso C. Caffaratti
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Timeline;
